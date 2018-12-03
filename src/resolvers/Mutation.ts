import { PhotoCreateWithoutPostInput } from '../generated/prisma-client';
import { ApolloContext } from '../types';
import { MutationToCreatePostResolver, GQLCreatePhotoInput, GQLPhoto } from '../schema';
import { uploadFile } from '../aws';
import { split, deburr, compose, toLower, concat } from 'lodash/fp';

async function formatPhoto (userId: string, postTitle: string, photo: GQLCreatePhotoInput | null): Promise<PhotoCreateWithoutPostInput> {
  const { url, file, title, description, price, currency } = <GQLCreatePhotoInput>photo;

  const newPost = {
    url: file 
      ? await uploadFile(userId, postTitle, await file)
      : <string>url,
    title: <string>title,
    description: <string>description,
    price: <number>price,
    currency: currency,
    postedBy: {
      connect: { id: userId }
    }
  };

  return newPost;
}

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
    /**
     * TODO:
     * We'll add tags as soon as this is resolved
     * https://github.com/prisma/prisma/issues/1275
     * Current behaviour: scalar lists are a bit screwy
     */
    // tags = []
  } = args;
  
  const formatedPhotos = await Promise.all(photos.map(photo => formatPhoto(context.user!.id, title, photo)));

  const post = await context.db.createPost({
    title: title,
    title_normalized: compose(
      deburr,
      toLower
    )(title),
    startsAt: startsAt,
    endsAt: endsAt,
    postedBy: {
      connect: { id: context.user.id }
    },
    photos: {
      create: formatedPhotos
    },
    // tags: {
    //   set: compose(
    //     concat(tags),
    //     split(' '),
    //     toLower,
    //     deburr,
    //   )(title)
    // }
  });

  const newGeolocation = await context.db.createGeolocation({
    post: { connect: { id: post.id }},
    lat: geolocation ? geolocation.lat : 0.0,
    long: geolocation ? geolocation.long : 0.0,
  });


  return {
    ...post,
    geolocation: newGeolocation
  };
}