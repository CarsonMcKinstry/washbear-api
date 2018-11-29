import { UserToPostsResolver } from "../schema";
import { ApolloContext } from "../types";

export const posts: UserToPostsResolver = async (root, args, context: ApolloContext ) => {
  const posts = await context.db.posts({
    where: {
      poster: {
        id: root.id
      }
    }
  });

  return posts;
}