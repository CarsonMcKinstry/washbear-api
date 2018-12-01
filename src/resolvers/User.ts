import { UserToPostsResolver } from "../schema";
import { ApolloContext } from "../types";

export const posts: UserToPostsResolver = async (root, args, context: ApolloContext ) => {
  const posts = await context.db.posts({
    where: {
      postedBy: {
        id: root.id
      }
    }
  });

  return posts;
}