import {
  UserToBookmarksResolver,
  UserToPostsResolver,
} from "../schema";
import { ApolloContext } from "../types";

export const posts: UserToPostsResolver = async (root, args, context: ApolloContext ) => {
  const queriedPosts = await context.db.posts({
    where: {
      postedBy: {
        id: root.id
      }
    }
  });

  return queriedPosts;
};

export const bookmarks: UserToBookmarksResolver = async (root, __, context: ApolloContext) => {
  const foundBookmarks = await context.db.bookmarks({
    where: {
      user: {
        id: root.id
      }
    }
  });

  return foundBookmarks;
};
