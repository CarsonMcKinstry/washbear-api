import { omit } from 'lodash/fp';
import { User, UserWhereInput, Post, PostWhereInput } from '../generated/prisma-client';
import { ApolloContext, Resolver } from "../types";
import { getUserId } from '../utils';
import {
  QueryToPostResolver, QueryToUsersResolver, QueryToUserProfileResolver, QueryToMeResolver, QueryToFeedResolver,
  GQLPost
} from '../schema';
import { Geolocation, GeolocationBoundary } from '../types';

export const me: QueryToMeResolver = async (_, __, context: ApolloContext) => {
  if (!context.user) {
    throw new Error('You must be authenticated to do that');
  }
  const user = await context.db.user({ id: context.user.id });

  return omit(['password'], user);
}

export const userProfile: QueryToUserProfileResolver = async (_, args, context: ApolloContext) => {
  const { id } = args;
  const user = await context.db.user({ id });

  return omit(['password'], user);
}

export const users: QueryToUsersResolver = async (_, args, context: ApolloContext) => {
  const queriedUsers = await context.db.users();
  return queriedUsers.map<User>(omit(['password']));
}

export const post: QueryToPostResolver = async (_, args, context: ApolloContext) => {
  const { id } = args;
  const post = await context.db.post({ id });

  return post;
}

function getGeoBounds(d: number, g: Geolocation): GeolocationBoundary {
  const rEarth = 3959;

  const MILES_PER_DEGREE = (2*Math.PI/360) * rEarth;

  const latMax = g.lat + (d / MILES_PER_DEGREE);
  const longMax = g.long + (d / MILES_PER_DEGREE);
  const latMin = g.lat - (d / MILES_PER_DEGREE);
  const longMin = g.long - (d / MILES_PER_DEGREE);

  return {
    latMin,
    latMax,
    longMin,
    longMax,
  }
}

export const feed: QueryToFeedResolver = async (_, args, context: ApolloContext) => {
  const { g, d = 10, q, skip, first, orderBy } = args;
  const geoBounds = getGeoBounds(d, <Geolocation>g);

  let OR: PostWhereInput[] = [];
  let AND: PostWhereInput[] = [];

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
    ]
  }

  const where: PostWhereInput = {
    geolocation: {
      lat_gte: geoBounds.latMin,
      lat_lte: geoBounds.latMax,
      long_gte: geoBounds.longMin,
      long_lte: geoBounds.longMax,
    },
    OR,
    AND,
  }

  const queriedPosts = await context.db.posts({ 
    where,
    skip,
    first,
    orderBy
  });

  console.log(queriedPosts);

  const postsCount = await context.db.postsConnection({ where }).aggregate().count();

  return {
    count: postsCount,
    postIds: queriedPosts.map(post => post.id)
  }
}