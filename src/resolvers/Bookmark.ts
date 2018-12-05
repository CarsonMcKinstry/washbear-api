import { BookmarkToPostResolver, BookmarkToUserResolver } from '../schema.d';
import { ApolloContext } from '../types';

export const post: BookmarkToPostResolver = (root, __, context: ApolloContext) => {
  const foundPost = context.db.bookmark({ id: root.id }).post();

  return foundPost;
};

export const user: BookmarkToUserResolver = (root, __, context: ApolloContext) => {
  const foundUser = context.db.bookmark({ id: root.id }).user();

  return foundUser;
};
