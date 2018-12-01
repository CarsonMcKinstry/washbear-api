import { Post, PhotoCreateWithoutPostInput } from '../generated/prisma-client';
import { Resolver, ApolloContext } from '../types';
import { getUserId } from '../utils';
import { MutationToCreatePostResolver, GQLCreatePhotoInput, GQLPhoto } from '../schema';
import { Prisma } from '../generated/prisma-client';
import fs from 'fs';
import path from 'path';
import { uploadFile } from '../aws';

// async function createPhoto(photo: GQLCreatePhotoInput, db: Prisma, userId: string) {
//   const { url, file, ...rest } = photo;

//   if (url) {
//     return db.createPhoto({
//       url,
//       ...rest,
//       postedBy: {
//         connect: { id: userId }
//       }
//     });
//   }
// }

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

// url?: string;
// file?: GQLUpload;
// title?: string;
// description?: string;
// price?: number;
// currency?: GQLCurrencyEnum;

export const createPost: MutationToCreatePostResolver = async (_: any, args, context: ApolloContext) => {
  if (!context.user) {
    throw new Error('You must be authenticated to do that');
  }

  const {
    title,
    startsAt,
    endsAt,
    photos = []
  } = args;

  const formatedPhotos = await Promise.all(photos.map(photo => formatPhoto(context.user.id, title, photo)));

  const post = context.db.createPost({
    title: title,
    startsAt: startsAt,
    endsAt: endsAt,
    postedBy: {
      connect: { id: context.user.id }
    },
    photos: {
      create: formatedPhotos
    }
  });

  return post;
}