import { compose, deburr, map, split, toLower } from 'lodash/fp';
import { uploadFile } from '../aws';
import { PhotoCreateWithoutPostInput, Tag} from '../generated/prisma-client';
import {
  GQLCreatePhotoInput,
  MutationToAddPhotoResolver,
  MutationToCreateBookmarkResolver,
  MutationToCreatePostResolver,
  MutationToDeleteBookmarkResolver,
  MutationToDeletePhotoResolver,
  MutationToDeletePostResolver,
  MutationToEditPhotoArgs,
  MutationToEditPhotoResolver,
  MutationToEditPostResolver,
} from '../schema';
import { ApolloContext } from '../types';

const formatPhoto = async (
  userId: string,
  postTitle: string,
  photo: GQLCreatePhotoInput | null
): Promise<PhotoCreateWithoutPostInput> => {
  const { url, file, title, description, price, currency } = photo as GQLCreatePhotoInput;

  const newPhoto = {
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

  return newPhoto;
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

interface EditPhotoArgs extends MutationToEditPhotoArgs {
  [key: string]: any;
}

export const editPhoto: MutationToEditPhotoResolver = async (_, args: EditPhotoArgs, context: ApolloContext) => {
  const { user } = context;
  const { photoId } = args;

  if (!user) {
    throw new Error('You must be authenticated to do that');
  }

  const photo = context.db.photo({ id: photoId });

  if (!photo) {
    throw new Error('That photo doesn\'t exist');
  }

  const postedBy = await photo.postedBy();

  if (postedBy.id !== user.id) {
    return context.ctx.throw(403, 'This is not your photo');
  }

  const data = Object.keys(args).reduce((acc, key) => {
    return {
      ...acc,
      [key]: args[key]
    };
  }, {});

  const editedPhoto = context.db.updatePhoto({
    data,
    where: { id: photoId },
  });

  return editedPhoto;
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

export const deleteBookmark: MutationToDeleteBookmarkResolver = async (_, args, context: ApolloContext) => {
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

export const deletePhoto: MutationToDeletePhotoResolver = async (_, args, context: ApolloContext) => {
  const { photoId } = args;
  const { user } = context;

  if (!user) {
    throw new Error('You must be authenticated to do that');
  }

  const photo = context.db.photo({ id: photoId });

  if (!photo) {
    throw new Error('That post doesn\'t exist');
  }

  const postedBy = await photo.postedBy();

  if (postedBy.id !== user!.id) {
    return context.ctx.throw(403, 'This is not your post');
  }

  return context.db.updatePhoto({
    data: {
      active: false
    },
    where: { id: photoId },
  });
};

export const addPhoto: MutationToAddPhotoResolver = async (_, args, context: ApolloContext) => {
  const { postId, photo } = args;
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

  const formattedPhoto = await formatPhoto(user!.id, await post.title(), photo);

  const newPhoto = context.db.createPhoto({
    ...formattedPhoto,
    post: {
      connect: { id: postId }
    },
    postedBy: {
      connect: { id: user.id }
    }
  });

  return newPhoto;
};
