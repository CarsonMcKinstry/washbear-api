import { ApolloContext } from '../types';
import { PostToPhotosResolver, PostToGeolocationResolver } from '../schema';

export const photos: PostToPhotosResolver = async (root, _, context: ApolloContext) => {
  const queriedPhotos = await context.db.photos({
    where: {
      post: {
        id: root.id
      }
    }
  });

  return queriedPhotos;
}

export const geolocation: PostToGeolocationResolver = async (root, _, context: ApolloContext) => {
  const queriedGeolocation = await context.db.geolocations({
    where: {
      post: {
        id: root.id
      }
    }
  });

  return queriedGeolocation[0];
}