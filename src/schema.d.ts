/* tslint:disable */
import { GraphQLResolveInfo, GraphQLScalarType } from 'graphql';
/**
 * This file is auto-generated by graphql-schema-typescript
 * Please note that any changes in this file may be overwritten
 */
 

/*******************************
 *                             *
 *          TYPE DEFS          *
 *                             *
 *******************************/
export interface GQLQuery {
  me?: GQLUser;
  user?: GQLUser;
  users: Array<GQLUser>;
  post?: GQLPost;
  posts?: Array<GQLPost>;
}

export interface GQLUser {
  avatar?: string;
  email?: string;
  facebookId?: string;
  id: string;
  name: string;
  posts?: Array<GQLPost>;
  bookmarks?: Array<GQLBookmark>;
}

export interface GQLPost {
  id: string;
  poster: GQLUser;
  title: string;
  createdAt: GQLDateTime;
  updatedAt: GQLDateTime;
  startsAt: GQLDateTime;
  endsAt: GQLDateTime;
  geolocation?: GQLGeolocation;
  bookmarks?: Array<GQLBookmark>;
  photos?: Array<GQLPhoto>;
}

export type GQLDateTime = any;

export interface GQLGeolocation {
  lat: number;
  long: number;
}

export interface GQLBookmarkWhereInput {
  user?: GQLUserWhereInput;
  post?: GQLPostWhereInput;
  AND?: Array<GQLBookmarkWhereInput>;
  OR?: Array<GQLBookmarkWhereInput>;
  NOT?: Array<GQLBookmarkWhereInput>;
}

export interface GQLUserWhereInput {
  avatar?: string;
  avatar_not?: string;
  avatar_in?: Array<string>;
  avatar_not_in?: Array<string>;
  avatar_lt?: string;
  avatar_lte?: string;
  avatar_gt?: string;
  avatar_gte?: string;
  avatar_contains?: string;
  avatar_not_contains?: string;
  avatar_starts_with?: string;
  avatar_not_starts_with?: string;
  avatar_ends_with?: string;
  avatar_not_ends_with?: string;
  email?: string;
  email_not?: string;
  email_in?: Array<string>;
  email_not_in?: Array<string>;
  email_lt?: string;
  email_lte?: string;
  email_gt?: string;
  email_gte?: string;
  email_contains?: string;
  email_not_contains?: string;
  email_starts_with?: string;
  email_not_starts_with?: string;
  email_ends_with?: string;
  email_not_ends_with?: string;
  id?: string;
  id_not?: string;
  id_in?: Array<string>;
  id_not_in?: Array<string>;
  id_lt?: string;
  id_lte?: string;
  id_gt?: string;
  id_gte?: string;
  id_contains?: string;
  id_not_contains?: string;
  id_starts_with?: string;
  id_not_starts_with?: string;
  id_ends_with?: string;
  id_not_ends_with?: string;
  name?: string;
  name_not?: string;
  name_in?: Array<string>;
  name_not_in?: Array<string>;
  name_lt?: string;
  name_lte?: string;
  name_gt?: string;
  name_gte?: string;
  name_contains?: string;
  name_not_contains?: string;
  name_starts_with?: string;
  name_not_starts_with?: string;
  name_ends_with?: string;
  name_not_ends_with?: string;
  password?: string;
  password_not?: string;
  password_in?: Array<string>;
  password_not_in?: Array<string>;
  password_lt?: string;
  password_lte?: string;
  password_gt?: string;
  password_gte?: string;
  password_contains?: string;
  password_not_contains?: string;
  password_starts_with?: string;
  password_not_starts_with?: string;
  password_ends_with?: string;
  password_not_ends_with?: string;
  facebookId?: string;
  facebookId_not?: string;
  facebookId_in?: Array<string>;
  facebookId_not_in?: Array<string>;
  facebookId_lt?: string;
  facebookId_lte?: string;
  facebookId_gt?: string;
  facebookId_gte?: string;
  facebookId_contains?: string;
  facebookId_not_contains?: string;
  facebookId_starts_with?: string;
  facebookId_not_starts_with?: string;
  facebookId_ends_with?: string;
  facebookId_not_ends_with?: string;
  bookmarks_every?: GQLBookmarkWhereInput;
  bookmarks_some?: GQLBookmarkWhereInput;
  bookmarks_none?: GQLBookmarkWhereInput;
  posts_every?: GQLPostWhereInput;
  posts_some?: GQLPostWhereInput;
  posts_none?: GQLPostWhereInput;
  AND?: Array<GQLUserWhereInput>;
  OR?: Array<GQLUserWhereInput>;
  NOT?: Array<GQLUserWhereInput>;
}

export interface GQLPostWhereInput {
  id?: string;
  id_not?: string;
  id_in?: Array<string>;
  id_not_in?: Array<string>;
  id_lt?: string;
  id_lte?: string;
  id_gt?: string;
  id_gte?: string;
  id_contains?: string;
  id_not_contains?: string;
  id_starts_with?: string;
  id_not_starts_with?: string;
  id_ends_with?: string;
  id_not_ends_with?: string;
  poster?: GQLUserWhereInput;
  title?: string;
  title_not?: string;
  title_in?: Array<string>;
  title_not_in?: Array<string>;
  title_lt?: string;
  title_lte?: string;
  title_gt?: string;
  title_gte?: string;
  title_contains?: string;
  title_not_contains?: string;
  title_starts_with?: string;
  title_not_starts_with?: string;
  title_ends_with?: string;
  title_not_ends_with?: string;
  createdAt?: GQLDateTime;
  createdAt_not?: GQLDateTime;
  createdAt_in?: Array<GQLDateTime>;
  createdAt_not_in?: Array<GQLDateTime>;
  createdAt_lt?: GQLDateTime;
  createdAt_lte?: GQLDateTime;
  createdAt_gt?: GQLDateTime;
  createdAt_gte?: GQLDateTime;
  updatedAt?: GQLDateTime;
  updatedAt_not?: GQLDateTime;
  updatedAt_in?: Array<GQLDateTime>;
  updatedAt_not_in?: Array<GQLDateTime>;
  updatedAt_lt?: GQLDateTime;
  updatedAt_lte?: GQLDateTime;
  updatedAt_gt?: GQLDateTime;
  updatedAt_gte?: GQLDateTime;
  startsAt?: GQLDateTime;
  startsAt_not?: GQLDateTime;
  startsAt_in?: Array<GQLDateTime>;
  startsAt_not_in?: Array<GQLDateTime>;
  startsAt_lt?: GQLDateTime;
  startsAt_lte?: GQLDateTime;
  startsAt_gt?: GQLDateTime;
  startsAt_gte?: GQLDateTime;
  endsAt?: GQLDateTime;
  endsAt_not?: GQLDateTime;
  endsAt_in?: Array<GQLDateTime>;
  endsAt_not_in?: Array<GQLDateTime>;
  endsAt_lt?: GQLDateTime;
  endsAt_lte?: GQLDateTime;
  endsAt_gt?: GQLDateTime;
  endsAt_gte?: GQLDateTime;
  geolocation?: GQLGeolocationWhereInput;
  bookmarks_every?: GQLBookmarkWhereInput;
  bookmarks_some?: GQLBookmarkWhereInput;
  bookmarks_none?: GQLBookmarkWhereInput;
  photos_every?: GQLPhotoWhereInput;
  photos_some?: GQLPhotoWhereInput;
  photos_none?: GQLPhotoWhereInput;
  AND?: Array<GQLPostWhereInput>;
  OR?: Array<GQLPostWhereInput>;
  NOT?: Array<GQLPostWhereInput>;
}

export interface GQLGeolocationWhereInput {
  lat?: number;
  lat_not?: number;
  lat_in?: Array<number>;
  lat_not_in?: Array<number>;
  lat_lt?: number;
  lat_lte?: number;
  lat_gt?: number;
  lat_gte?: number;
  long?: number;
  long_not?: number;
  long_in?: Array<number>;
  long_not_in?: Array<number>;
  long_lt?: number;
  long_lte?: number;
  long_gt?: number;
  long_gte?: number;
  AND?: Array<GQLGeolocationWhereInput>;
  OR?: Array<GQLGeolocationWhereInput>;
  NOT?: Array<GQLGeolocationWhereInput>;
}

export interface GQLPhotoWhereInput {
  url?: string;
  url_not?: string;
  url_in?: Array<string>;
  url_not_in?: Array<string>;
  url_lt?: string;
  url_lte?: string;
  url_gt?: string;
  url_gte?: string;
  url_contains?: string;
  url_not_contains?: string;
  url_starts_with?: string;
  url_not_starts_with?: string;
  url_ends_with?: string;
  url_not_ends_with?: string;
  poster?: GQLUserWhereInput;
  title?: string;
  title_not?: string;
  title_in?: Array<string>;
  title_not_in?: Array<string>;
  title_lt?: string;
  title_lte?: string;
  title_gt?: string;
  title_gte?: string;
  title_contains?: string;
  title_not_contains?: string;
  title_starts_with?: string;
  title_not_starts_with?: string;
  title_ends_with?: string;
  title_not_ends_with?: string;
  description?: string;
  description_not?: string;
  description_in?: Array<string>;
  description_not_in?: Array<string>;
  description_lt?: string;
  description_lte?: string;
  description_gt?: string;
  description_gte?: string;
  description_contains?: string;
  description_not_contains?: string;
  description_starts_with?: string;
  description_not_starts_with?: string;
  description_ends_with?: string;
  description_not_ends_with?: string;
  price?: number;
  price_not?: number;
  price_in?: Array<number>;
  price_not_in?: Array<number>;
  price_lt?: number;
  price_lte?: number;
  price_gt?: number;
  price_gte?: number;
  currency?: GQLCurrencyEnum;
  currency_not?: GQLCurrencyEnum;
  currency_in?: Array<GQLCurrencyEnum>;
  currency_not_in?: Array<GQLCurrencyEnum>;
  AND?: Array<GQLPhotoWhereInput>;
  OR?: Array<GQLPhotoWhereInput>;
  NOT?: Array<GQLPhotoWhereInput>;
}

export enum GQLCurrencyEnum {
  USD = 'USD',
  EUR = 'EUR',
  CAD = 'CAD',
  GBP = 'GBP',
  AUD = 'AUD'
}

export enum GQLBookmarkOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export interface GQLBookmark {
  user: GQLUser;
  post: GQLPost;
}

export enum GQLPhotoOrderByInput {
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  price_ASC = 'price_ASC',
  price_DESC = 'price_DESC',
  currency_ASC = 'currency_ASC',
  currency_DESC = 'currency_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export interface GQLPhoto {
  url: string;
  poster: GQLUser;
  title?: string;
  description?: string;
  price?: number;
  currency?: GQLCurrencyEnum;
}

/*********************************
 *                               *
 *         TYPE RESOLVERS        *
 *                               *
 *********************************/
/**
 * This interface define the shape of your resolver
 * Note that this type is designed to be compatible with graphql-tools resolvers
 * However, you can still use other generated interfaces to make your resolver type-safed
 */
export interface GQLResolver {
  Query?: GQLQueryTypeResolver;
  User?: GQLUserTypeResolver;
  Post?: GQLPostTypeResolver;
  DateTime?: GraphQLScalarType;
  Geolocation?: GQLGeolocationTypeResolver;
  Bookmark?: GQLBookmarkTypeResolver;
  Photo?: GQLPhotoTypeResolver;
}
export interface GQLQueryTypeResolver<TParent = any> {
  me?: QueryToMeResolver<TParent>;
  user?: QueryToUserResolver<TParent>;
  users?: QueryToUsersResolver<TParent>;
  post?: QueryToPostResolver<TParent>;
  posts?: QueryToPostsResolver<TParent>;
}

export interface QueryToMeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToUserArgs {
  id: string;
}
export interface QueryToUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToUserArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToUsersResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToPostArgs {
  id: string;
}
export interface QueryToPostResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToPostArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToPostsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLUserTypeResolver<TParent = any> {
  avatar?: UserToAvatarResolver<TParent>;
  email?: UserToEmailResolver<TParent>;
  facebookId?: UserToFacebookIdResolver<TParent>;
  id?: UserToIdResolver<TParent>;
  name?: UserToNameResolver<TParent>;
  posts?: UserToPostsResolver<TParent>;
  bookmarks?: UserToBookmarksResolver<TParent>;
}

export interface UserToAvatarResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToEmailResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToFacebookIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToPostsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToBookmarksResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLPostTypeResolver<TParent = any> {
  id?: PostToIdResolver<TParent>;
  poster?: PostToPosterResolver<TParent>;
  title?: PostToTitleResolver<TParent>;
  createdAt?: PostToCreatedAtResolver<TParent>;
  updatedAt?: PostToUpdatedAtResolver<TParent>;
  startsAt?: PostToStartsAtResolver<TParent>;
  endsAt?: PostToEndsAtResolver<TParent>;
  geolocation?: PostToGeolocationResolver<TParent>;
  bookmarks?: PostToBookmarksResolver<TParent>;
  photos?: PostToPhotosResolver<TParent>;
}

export interface PostToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PostToPosterResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PostToTitleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PostToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PostToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PostToStartsAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PostToEndsAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PostToGeolocationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PostToBookmarksArgs {
  where?: GQLBookmarkWhereInput;
  orderBy?: GQLBookmarkOrderByInput;
  skip?: number;
  after?: string;
  before?: string;
  first?: number;
  last?: number;
}
export interface PostToBookmarksResolver<TParent = any, TResult = any> {
  (parent: TParent, args: PostToBookmarksArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PostToPhotosArgs {
  where?: GQLPhotoWhereInput;
  orderBy?: GQLPhotoOrderByInput;
  skip?: number;
  after?: string;
  before?: string;
  first?: number;
  last?: number;
}
export interface PostToPhotosResolver<TParent = any, TResult = any> {
  (parent: TParent, args: PostToPhotosArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLGeolocationTypeResolver<TParent = any> {
  lat?: GeolocationToLatResolver<TParent>;
  long?: GeolocationToLongResolver<TParent>;
}

export interface GeolocationToLatResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GeolocationToLongResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLBookmarkTypeResolver<TParent = any> {
  user?: BookmarkToUserResolver<TParent>;
  post?: BookmarkToPostResolver<TParent>;
}

export interface BookmarkToUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface BookmarkToPostResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLPhotoTypeResolver<TParent = any> {
  url?: PhotoToUrlResolver<TParent>;
  poster?: PhotoToPosterResolver<TParent>;
  title?: PhotoToTitleResolver<TParent>;
  description?: PhotoToDescriptionResolver<TParent>;
  price?: PhotoToPriceResolver<TParent>;
  currency?: PhotoToCurrencyResolver<TParent>;
}

export interface PhotoToUrlResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PhotoToPosterResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PhotoToTitleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PhotoToDescriptionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PhotoToPriceResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PhotoToCurrencyResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
