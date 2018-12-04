import { FeedToPostsResolver } from '../schema.d';
import { ApolloContext } from '../types';

export const posts: FeedToPostsResolver = (root, _, context: ApolloContext) => {
  return context.db.posts(
    {
      where: {
        id_in: root.postIds
      }
    }
  );
};
