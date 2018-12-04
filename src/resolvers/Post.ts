import { PostToGeolocationResolver, PostToPhotosResolver, PostToTagsResolver } from '../schema';
import { ApolloContext } from '../types';

export const photos: PostToPhotosResolver = async (root, _, context: ApolloContext) => {
  const queriedPhotos = await context.db.photos({
    where: {
      post: {
        id: root.id
      }
    }
  });

  return queriedPhotos;
};

export const geolocation: PostToGeolocationResolver = async (root, _, context: ApolloContext) => {
  const queriedGeolocation = await context.db.geolocations({
    where: {
      post: {
        id: root.id
      }
    }
  });

  return queriedGeolocation[0];
};

export const tags: PostToTagsResolver = async (root, _, context: ApolloContext) => {
  const foundTags = await context.db.post({ id: root.id}).tags();
  return foundTags;
};
