import {
  MutationToCreateBookmarkResolver,
  MutationToDeleteBookmarkResolver,
} from '../schema';
import { ApolloContext } from '../types';

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
