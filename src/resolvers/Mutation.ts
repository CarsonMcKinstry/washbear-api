import { compose, deburr, map, split, toLower } from 'lodash/fp';
import { uploadFile } from '../aws';
import { PhotoCreateWithoutPostInput, Tag} from '../generated/prisma-client';
import { GQLCreatePhotoInput, MutationToCreatePostResolver } from '../schema';
import { ApolloContext } from '../types';

const formatPhoto = async (
  userId: string,
  postTitle: string,
  photo: GQLCreatePhotoInput | null
): Promise<PhotoCreateWithoutPostInput> => {
  const { url, file, title, description, price, currency } = photo as GQLCreatePhotoInput;

  const newPost = {
    currency,
    description,
    postedBy: {
      connect: { id: userId }
    },
    price,
    title,
    url: file
      ? await uploadFile(userId, postTitle, await file)
      : url as string,
  };

  return newPost;
};

const titleToTags = (title: string): string[] => compose(
  split(' '),
  toLower,
  deburr,
)(title);

const formatTags = (tags: string[]): Tag[] => map((tag) => ({ name: tag }), tags);

export const createPost: MutationToCreatePostResolver = async (_: any, args, context: ApolloContext) => {
  if (!context.user) {
    throw new Error('You must be authenticated to do that');
  }

  const {
    title,
    startsAt,
    endsAt,
    photos = [],
    geolocation,
    tags = []
  } = args;

  const formatedPhotos = await Promise
  .all(
    photos
      .map((photo) => formatPhoto(context.user!.id, title, photo))
  );

  const newTags = formatTags(titleToTags(title).concat(tags));
  console.log(newTags);

  const post = await context.db.createPost({
    endsAt,
    geolocation: {
      create: {
        lat: geolocation ? geolocation.lat : 0.0,
        long: geolocation ? geolocation.long : 0.0,
      }
    },
    photos: {
      create: formatedPhotos
    },
    postedBy: {
      connect: { id: context.user.id }
    },
    startsAt,
    tags: {
      create: formatTags(titleToTags(title).concat(tags))
    },
    title,
    title_normalized: compose(
      deburr,
      toLower
    )(title),
  });

  return post;
};
