import { compose, deburr, toLower } from 'lodash/fp';
import {
  MutationToCreatePostResolver,
  MutationToDeletePostResolver,
  MutationToEditPostResolver,
} from '../schema';
import { ApolloContext } from '../types';
import { formatPhoto, formatTags, titleToTags } from './mutationUtils';

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
    tags = [],
    address
  } = args;

  const formatedPhotos = await Promise
  .all(
    photos
      .map((photo) => formatPhoto(context.user!.id, title, photo))
  );

  const newPost = await context.db.createPost({
    address: {
      create: address
    },
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

export const editPost: MutationToEditPostResolver = async (_, args, context: ApolloContext) => {
  const { postId } = args;
  const { user } = context;

  if (!user) {
    throw new Error('You must be authenticated to do that');
  }

  const post = context.db.post({ id: postId });

  if (!post) {
    throw new Error('That post doesn\'t exist');
  }

  const postedBy = await post.postedBy();

  if (postedBy.id !== user!.id) {
    return context.ctx.throw(403, 'This is not your post');
  }

  const resolvedPost = await post;

  const {
    title,
    startsAt,
    endsAt,
    geolocation,
    tags = [],
    address
  } = args;

  const updatedPost = await context.db.updatePost({
    data: {
      address: {
        update: address
      },
      endsAt,
      geolocation: {
        update: geolocation
      },
      startsAt,
      tags: {
        create: formatTags(titleToTags(title || resolvedPost.title).concat(tags as string[]))
      },
      title,
      title_normalized: compose(
        deburr,
        toLower
      )(title || resolvedPost.title),
    },
    where: { id: postId},
  });

  return updatedPost;
};

export const deletePost: MutationToDeletePostResolver = async (_, args, context: ApolloContext) => {
  const { postId } = args;
  const { user } = context;

  if (!user) {
    throw new Error('You must be authenticated to do that');
  }

  const post = context.db.post({ id: postId });

  if (!post) {
    throw new Error('That post doesn\'t exist');
  }

  const postedBy = await post.postedBy();

  if (postedBy.id !== user!.id) {
    return context.ctx.throw(403, 'This is not your post');
  }

  return context.db.updatePost({
    data: {
      active: false
    },
    where: {
      id: postId
    }
  });
};
