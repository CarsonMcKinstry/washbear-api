import {
  MutationToEditProfileResolver,
} from '../schema';
import { ApolloContext } from '../types';
import { formatAvatar } from './mutationUtils';

export const editProfile: MutationToEditProfileResolver = async (_, args, context: ApolloContext) => {
  const { user } = context;

  if (!user) {
    throw new Error('You must be authenticated to do that');
  }

  const {
    userId,
    photo,
    name,
    email
  } = args;

  if (!userId) {
    throw new Error('You must provide a user id');
  }

  if (user.id !== userId) {
    return context.ctx.throw(403, 'This is not your profile');
  }

  let data = {};

  if (photo) {
    data = {
      ...data,
      avatar: {
        update: formatAvatar(userId, photo)
      }
    };
  }

  if (name) {
    data = {
      ...data,
      name: {
        update: name
      },
    };
  }

  if (email) {
    data = {
      ...data,
      email: {
        update: name
      },
    };
  }

  const updatedProfile = await context.db.updateUser({
    data,
    where: {
      id: userId
    },
  });

  return updatedProfile;
};
