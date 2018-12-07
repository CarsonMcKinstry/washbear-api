import {
  PostToAddressResolver,
  PostToBookmarksResolver,
  PostToGeolocationResolver,
  PostToPhotosResolver,
  PostToTagsResolver,
} from '../schema';
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
  const queriedGeolocation = await context.db.post({ id: root.id }).geolocation();

  return queriedGeolocation;
};

export const tags: PostToTagsResolver = async (root, _, context: ApolloContext) => {
  const foundTags = await context.db.post({ id: root.id}).tags();
  return foundTags;
};

export const bookmarks: PostToBookmarksResolver = async (root, _, context: ApolloContext) => {
  const foundBookmarks = await context.db.bookmarks({
    where: {
      post: {
        id: root.id
      }
    }
  });

  return foundBookmarks;
};

export const address: PostToAddressResolver = async (root, _, context: ApolloContext) => {
  const [foundAddress] = await context.db.addresses({
    where: {
      post: {
        id: root.id
      }
    }
  });

  return foundAddress;
};
