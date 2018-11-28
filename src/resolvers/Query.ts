import { User, UserWhereInput } from '../generated/prisma-client';
import { ApolloContext, Resolver } from "../types";
import { getUserId } from '../utils';

export const me: Resolver<User, undefined, undefined, ApolloContext> = async (
  _, __, context
) => {
  const id = getUserId(context);
  const user = await context.db.user({ id });
  return user;
}

export const user: Resolver<
  User,
  undefined,
  UserWhereInput,
  ApolloContext
> = async (
  _, args, context
) => {
  const { id } = args;
  const user = await context.db.user({ id });

  return user;
}

export const users: Resolver<
  User[],
  undefined,
  UserWhereInput,
  ApolloContext
> = async (_, args, context) => {
  const queriedUsers = await context.db.users();
  return queriedUsers;
}