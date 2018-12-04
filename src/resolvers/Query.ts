import { omit } from 'lodash/fp';
import { Post, PostWhereInput, User, UserWhereInput } from '../generated/prisma-client';
import {
  GQLPost, QueryToFeedResolver, QueryToMeResolver, QueryToPostResolver, QueryToUserProfileResolver,
  QueryToUsersResolver
} from '../schema';
import { ApolloContext, Resolver } from "../types";
import { Geolocation, GeolocationBoundary } from '../types';
import { getUserId } from '../utils';

export const me: QueryToMeResolver = async (_, __, context: ApolloContext) => {
  if (!context.user) {
    throw new Error('You must be authenticated to do that');
  }
  const user = await context.db.user({ id: context.user.id });

  return omit(['password'], user);
};

export const userProfile: QueryToUserProfileResolver = async (_, args, context: ApolloContext) => {
  const { id } = args;
  const user = await context.db.user({ id });

  return omit(['password'], user);
};

export const users: QueryToUsersResolver = async (_, args, context: ApolloContext) => {
  const queriedUsers = await context.db.users();
  return queriedUsers.map<User>(omit(['password']));
};

export const post: QueryToPostResolver = async (_, args, context: ApolloContext) => {
  const { id } = args;
  const queriedPosts = await context.db.post({ id });

  return queriedPosts;
};

function getGeoBounds(d: number, g: Geolocation): GeolocationBoundary {
  const rEarth = 3959;

  const MILES_PER_DEGREE = (2 * Math.PI / 360) * rEarth;

  const latMax = g.lat + (d / MILES_PER_DEGREE);
  const longMax = g.long + (d / MILES_PER_DEGREE);
  const latMin = g.lat - (d / MILES_PER_DEGREE);
  const longMin = g.long - (d / MILES_PER_DEGREE);

  return {
    latMax,
    latMin,
    longMax,
    longMin,
  };
}

export const feed: QueryToFeedResolver = async (_, args, context: ApolloContext) => {
  const { g, d = 10, q, skip, first, orderBy } = args;
  const geoBounds = getGeoBounds(d, g as Geolocation);

  let OR: PostWhereInput[] = [];
  let AND: PostWhereInput[] = [];

  if (q) {
    OR = [
      ...OR,
      {
        title_normalized_contains: q,
      },
      {
        tags_some: {
          name_contains: q,
        },
      },
      {
        photos_some: {
          OR: [
            { title_contains: q },
            { description_contains: q},
          ],
        }
      }
    ];
  }

  if (args.startsAt) {
    AND = [
      ...AND,
      { startsAt_gte: args.startsAt}
    ];
  }

  if (args.endsAt) {
    AND = [
      ...AND,
      { endsAt_lte: args.endsAt }
    ];
  }

  const where: PostWhereInput = {
    geolocation: {
      lat_gte: geoBounds.latMin,
      lat_lte: geoBounds.latMax,
      long_gte: geoBounds.longMin,
      long_lte: geoBounds.longMax,
    },
  };

  if (OR.length > 0) {
    where.OR = OR;
  }

  if (AND.length > 0) {
    where.AND = AND;
  }

  const queriedPosts = await context.db.posts({
    first,
    orderBy,
    skip,
    where,
  });

  const postsCount = await context.db.postsConnection({ where }).aggregate().count();

  return {
    count: postsCount,
    postIds: queriedPosts.map((p) => p.id)
  };
};
