export const typeDefs = /* GraphQL */ `type AggregateBookmark {
  count: Int!
}

type AggregateGeolocation {
  count: Int!
}

type AggregatePhoto {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Bookmark {
  user: User!
  post: Post!
}

type BookmarkConnection {
  pageInfo: PageInfo!
  edges: [BookmarkEdge]!
  aggregate: AggregateBookmark!
}

input BookmarkCreateInput {
  user: UserCreateOneWithoutBookmarksInput!
  post: PostCreateOneWithoutBookmarksInput!
}

input BookmarkCreateManyWithoutPostInput {
  create: [BookmarkCreateWithoutPostInput!]
}

input BookmarkCreateManyWithoutUserInput {
  create: [BookmarkCreateWithoutUserInput!]
}

input BookmarkCreateWithoutPostInput {
  user: UserCreateOneWithoutBookmarksInput!
}

input BookmarkCreateWithoutUserInput {
  post: PostCreateOneWithoutBookmarksInput!
}

type BookmarkEdge {
  node: Bookmark!
  cursor: String!
}

enum BookmarkOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BookmarkSubscriptionPayload {
  mutation: MutationType!
  node: Bookmark
  updatedFields: [String!]
}

input BookmarkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookmarkWhereInput
  AND: [BookmarkSubscriptionWhereInput!]
  OR: [BookmarkSubscriptionWhereInput!]
  NOT: [BookmarkSubscriptionWhereInput!]
}

input BookmarkUpdateManyWithoutPostInput {
  create: [BookmarkCreateWithoutPostInput!]
}

input BookmarkUpdateManyWithoutUserInput {
  create: [BookmarkCreateWithoutUserInput!]
}

input BookmarkWhereInput {
  user: UserWhereInput
  post: PostWhereInput
  AND: [BookmarkWhereInput!]
  OR: [BookmarkWhereInput!]
  NOT: [BookmarkWhereInput!]
}

enum CurrencyEnum {
  USD
  EUR
  CAD
  GBP
  AUD
}

scalar DateTime

type Geolocation {
  lat: Float!
  long: Float!
}

type GeolocationConnection {
  pageInfo: PageInfo!
  edges: [GeolocationEdge]!
  aggregate: AggregateGeolocation!
}

input GeolocationCreateInput {
  lat: Float!
  long: Float!
}

input GeolocationCreateOneInput {
  create: GeolocationCreateInput
}

type GeolocationEdge {
  node: Geolocation!
  cursor: String!
}

enum GeolocationOrderByInput {
  lat_ASC
  lat_DESC
  long_ASC
  long_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GeolocationPreviousValues {
  lat: Float!
  long: Float!
}

type GeolocationSubscriptionPayload {
  mutation: MutationType!
  node: Geolocation
  updatedFields: [String!]
  previousValues: GeolocationPreviousValues
}

input GeolocationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GeolocationWhereInput
  AND: [GeolocationSubscriptionWhereInput!]
  OR: [GeolocationSubscriptionWhereInput!]
  NOT: [GeolocationSubscriptionWhereInput!]
}

input GeolocationUpdateDataInput {
  lat: Float
  long: Float
}

input GeolocationUpdateManyMutationInput {
  lat: Float
  long: Float
}

input GeolocationUpdateOneInput {
  create: GeolocationCreateInput
  update: GeolocationUpdateDataInput
  upsert: GeolocationUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input GeolocationUpsertNestedInput {
  update: GeolocationUpdateDataInput!
  create: GeolocationCreateInput!
}

input GeolocationWhereInput {
  lat: Float
  lat_not: Float
  lat_in: [Float!]
  lat_not_in: [Float!]
  lat_lt: Float
  lat_lte: Float
  lat_gt: Float
  lat_gte: Float
  long: Float
  long_not: Float
  long_in: [Float!]
  long_not_in: [Float!]
  long_lt: Float
  long_lte: Float
  long_gt: Float
  long_gte: Float
  AND: [GeolocationWhereInput!]
  OR: [GeolocationWhereInput!]
  NOT: [GeolocationWhereInput!]
}

scalar Long

type Mutation {
  createBookmark(data: BookmarkCreateInput!): Bookmark!
  deleteManyBookmarks(where: BookmarkWhereInput): BatchPayload!
  createGeolocation(data: GeolocationCreateInput!): Geolocation!
  updateManyGeolocations(data: GeolocationUpdateManyMutationInput!, where: GeolocationWhereInput): BatchPayload!
  deleteManyGeolocations(where: GeolocationWhereInput): BatchPayload!
  createPhoto(data: PhotoCreateInput!): Photo!
  updateManyPhotos(data: PhotoUpdateManyMutationInput!, where: PhotoWhereInput): BatchPayload!
  deleteManyPhotos(where: PhotoWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Photo {
  url: String!
  poster: User!
  title: String
  description: String
  price: Int
  currency: CurrencyEnum
}

type PhotoConnection {
  pageInfo: PageInfo!
  edges: [PhotoEdge]!
  aggregate: AggregatePhoto!
}

input PhotoCreateInput {
  url: String!
  poster: UserCreateOneInput!
  title: String
  description: String
  price: Int
  currency: CurrencyEnum
}

input PhotoCreateManyInput {
  create: [PhotoCreateInput!]
}

type PhotoEdge {
  node: Photo!
  cursor: String!
}

enum PhotoOrderByInput {
  url_ASC
  url_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  price_ASC
  price_DESC
  currency_ASC
  currency_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PhotoPreviousValues {
  url: String!
  title: String
  description: String
  price: Int
  currency: CurrencyEnum
}

type PhotoSubscriptionPayload {
  mutation: MutationType!
  node: Photo
  updatedFields: [String!]
  previousValues: PhotoPreviousValues
}

input PhotoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PhotoWhereInput
  AND: [PhotoSubscriptionWhereInput!]
  OR: [PhotoSubscriptionWhereInput!]
  NOT: [PhotoSubscriptionWhereInput!]
}

input PhotoUpdateManyInput {
  create: [PhotoCreateInput!]
}

input PhotoUpdateManyMutationInput {
  url: String
  title: String
  description: String
  price: Int
  currency: CurrencyEnum
}

input PhotoWhereInput {
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  poster: UserWhereInput
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  currency: CurrencyEnum
  currency_not: CurrencyEnum
  currency_in: [CurrencyEnum!]
  currency_not_in: [CurrencyEnum!]
  AND: [PhotoWhereInput!]
  OR: [PhotoWhereInput!]
  NOT: [PhotoWhereInput!]
}

type Post {
  id: ID!
  poster: User!
  title: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  startsAt: DateTime!
  endsAt: DateTime!
  geolocation: Geolocation
  bookmarks(where: BookmarkWhereInput, orderBy: BookmarkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bookmark!]
  photos(where: PhotoWhereInput, orderBy: PhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Photo!]
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  poster: UserCreateOneWithoutPostsInput!
  title: String!
  startsAt: DateTime!
  endsAt: DateTime!
  geolocation: GeolocationCreateOneInput
  bookmarks: BookmarkCreateManyWithoutPostInput
  photos: PhotoCreateManyInput
}

input PostCreateManyWithoutPosterInput {
  create: [PostCreateWithoutPosterInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateOneWithoutBookmarksInput {
  create: PostCreateWithoutBookmarksInput
  connect: PostWhereUniqueInput
}

input PostCreateWithoutBookmarksInput {
  poster: UserCreateOneWithoutPostsInput!
  title: String!
  startsAt: DateTime!
  endsAt: DateTime!
  geolocation: GeolocationCreateOneInput
  photos: PhotoCreateManyInput
}

input PostCreateWithoutPosterInput {
  title: String!
  startsAt: DateTime!
  endsAt: DateTime!
  geolocation: GeolocationCreateOneInput
  bookmarks: BookmarkCreateManyWithoutPostInput
  photos: PhotoCreateManyInput
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  startsAt_ASC
  startsAt_DESC
  endsAt_ASC
  endsAt_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  startsAt: DateTime!
  endsAt: DateTime!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  poster: UserUpdateOneRequiredWithoutPostsInput
  title: String
  startsAt: DateTime
  endsAt: DateTime
  geolocation: GeolocationUpdateOneInput
  bookmarks: BookmarkUpdateManyWithoutPostInput
  photos: PhotoUpdateManyInput
}

input PostUpdateManyMutationInput {
  title: String
  startsAt: DateTime
  endsAt: DateTime
}

input PostUpdateManyWithoutPosterInput {
  create: [PostCreateWithoutPosterInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutPosterInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutPosterInput!]
}

input PostUpdateWithoutPosterDataInput {
  title: String
  startsAt: DateTime
  endsAt: DateTime
  geolocation: GeolocationUpdateOneInput
  bookmarks: BookmarkUpdateManyWithoutPostInput
  photos: PhotoUpdateManyInput
}

input PostUpdateWithWhereUniqueWithoutPosterInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutPosterDataInput!
}

input PostUpsertWithWhereUniqueWithoutPosterInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutPosterDataInput!
  create: PostCreateWithoutPosterInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  poster: UserWhereInput
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  startsAt: DateTime
  startsAt_not: DateTime
  startsAt_in: [DateTime!]
  startsAt_not_in: [DateTime!]
  startsAt_lt: DateTime
  startsAt_lte: DateTime
  startsAt_gt: DateTime
  startsAt_gte: DateTime
  endsAt: DateTime
  endsAt_not: DateTime
  endsAt_in: [DateTime!]
  endsAt_not_in: [DateTime!]
  endsAt_lt: DateTime
  endsAt_lte: DateTime
  endsAt_gt: DateTime
  endsAt_gte: DateTime
  geolocation: GeolocationWhereInput
  bookmarks_every: BookmarkWhereInput
  bookmarks_some: BookmarkWhereInput
  bookmarks_none: BookmarkWhereInput
  photos_every: PhotoWhereInput
  photos_some: PhotoWhereInput
  photos_none: PhotoWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  bookmarks(where: BookmarkWhereInput, orderBy: BookmarkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bookmark]!
  bookmarksConnection(where: BookmarkWhereInput, orderBy: BookmarkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookmarkConnection!
  geolocations(where: GeolocationWhereInput, orderBy: GeolocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Geolocation]!
  geolocationsConnection(where: GeolocationWhereInput, orderBy: GeolocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GeolocationConnection!
  photos(where: PhotoWhereInput, orderBy: PhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Photo]!
  photosConnection(where: PhotoWhereInput, orderBy: PhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PhotoConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  bookmark(where: BookmarkSubscriptionWhereInput): BookmarkSubscriptionPayload
  geolocation(where: GeolocationSubscriptionWhereInput): GeolocationSubscriptionPayload
  photo(where: PhotoSubscriptionWhereInput): PhotoSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  avatar: String
  email: String
  id: ID!
  name: String!
  password: String
  facebookId: String
  bookmarks(where: BookmarkWhereInput, orderBy: BookmarkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bookmark!]
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  avatar: String
  email: String
  name: String!
  password: String
  facebookId: String
  bookmarks: BookmarkCreateManyWithoutUserInput
  posts: PostCreateManyWithoutPosterInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutBookmarksInput {
  create: UserCreateWithoutBookmarksInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBookmarksInput {
  avatar: String
  email: String
  name: String!
  password: String
  facebookId: String
  posts: PostCreateManyWithoutPosterInput
}

input UserCreateWithoutPostsInput {
  avatar: String
  email: String
  name: String!
  password: String
  facebookId: String
  bookmarks: BookmarkCreateManyWithoutUserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  avatar_ASC
  avatar_DESC
  email_ASC
  email_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  facebookId_ASC
  facebookId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  avatar: String
  email: String
  id: ID!
  name: String!
  password: String
  facebookId: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  avatar: String
  email: String
  name: String
  password: String
  facebookId: String
  bookmarks: BookmarkUpdateManyWithoutUserInput
  posts: PostUpdateManyWithoutPosterInput
}

input UserUpdateManyMutationInput {
  avatar: String
  email: String
  name: String
  password: String
  facebookId: String
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutPostsDataInput {
  avatar: String
  email: String
  name: String
  password: String
  facebookId: String
  bookmarks: BookmarkUpdateManyWithoutUserInput
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  facebookId: String
  facebookId_not: String
  facebookId_in: [String!]
  facebookId_not_in: [String!]
  facebookId_lt: String
  facebookId_lte: String
  facebookId_gt: String
  facebookId_gte: String
  facebookId_contains: String
  facebookId_not_contains: String
  facebookId_starts_with: String
  facebookId_not_starts_with: String
  facebookId_ends_with: String
  facebookId_not_ends_with: String
  bookmarks_every: BookmarkWhereInput
  bookmarks_some: BookmarkWhereInput
  bookmarks_none: BookmarkWhereInput
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  email: String
  id: ID
  facebookId: String
}
`