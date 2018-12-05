import { compose, deburr, map, split, toLower } from 'lodash/fp';
import { uploadFile } from '../aws';
import { PhotoCreateWithoutPostInput, Tag} from '../generated/prisma-client';
import {
  GQLCreatePhotoInput,
  MutationToCreateBookmarkResolver,
  MutationToCreatePostResolver,
  MutationToRemoveBookmarkResolver,
} from '../schema';
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

const formatTags = (tags: string[]) => map((tag) => ({ name: tag }), tags);

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

  const newPost = await context.db.createPost({
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

  return newPost;
};

export const createBookmark: MutationToCreateBookmarkResolver = async (_, args, context: ApolloContext, info ) => {
  const { user } = context;
  const { postId } = args;

  if (!user) {
    throw new Error('You must be authenticated to do that');
  }

  const exists = await context.db.$exists.bookmark({
    post: { id: postId },
    user: { id: user!.id },
  });

  if (exists) {
    throw new Error('This bookmark already exists');
  }

  try {
    const newBookmark = await context.db.createBookmark({
      post: { connect: { id: postId } },
      user: { connect: { id: user!.id  }},
    });

    return newBookmark;
  } catch (err) {
    throw err;
  }
};

export const removeBookmark: MutationToRemoveBookmarkResolver = async (_, args, context: ApolloContext) => {
  const { user } = context;
  const { postId } = args;

  if (!user) {
    throw new Error('You must be authenticated to do that');
  }

  const [bookmark] = await context.db.bookmarks({
    where: {
      post: {
        id: postId
      },
      user: {
        id: user.id
      },
    }
  });

  if (!bookmark) {
    throw new Error('Bookmark doesn\'t exist');
  }

  try {
    const deletedBookmark = await context.db.deleteBookmark({ id: bookmark.id });

    return deletedBookmark;
  } catch (err) {
    throw err;
  }
};
