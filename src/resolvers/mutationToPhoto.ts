import {
  MutationToAddPhotoResolver,
  MutationToDeletePhotoResolver,
  MutationToEditPhotoArgs,
  MutationToEditPhotoResolver,
} from '../schema';
import { ApolloContext } from '../types';
import { formatPhoto } from './mutationUtils';

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
