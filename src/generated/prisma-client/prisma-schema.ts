export const typeDefs = /* GraphQL */ `type Address {
  post: Post!
  singleLine: String!
  streetAddress: String!
  city: String!
  stateProvince: String!
  postalCode: String!
  country: String!
}

type AddressConnection {
  pageInfo: PageInfo!
  edges: [AddressEdge]!
  aggregate: AggregateAddress!
}

input AddressCreateInput {
  post: PostCreateOneWithoutAddressInput!
  singleLine: String!
  streetAddress: String!
  city: String!
  stateProvince: String!
  postalCode: String!
  country: String!
}

input AddressCreateOneWithoutPostInput {
  create: AddressCreateWithoutPostInput
}

input AddressCreateWithoutPostInput {
  singleLine: String!
  streetAddress: String!
  city: String!
  stateProvince: String!
  postalCode: String!
  country: String!
}

type AddressEdge {
  node: Address!
  cursor: String!
}

enum AddressOrderByInput {
  singleLine_ASC
  singleLine_DESC
  streetAddress_ASC
  streetAddress_DESC
  city_ASC
  city_DESC
  stateProvince_ASC
  stateProvince_DESC
  postalCode_ASC
  postalCode_DESC
  country_ASC
  country_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AddressPreviousValues {
  singleLine: String!
  streetAddress: String!
  city: String!
  stateProvince: String!
  postalCode: String!
  country: String!
}

type AddressSubscriptionPayload {
  mutation: MutationType!
  node: Address
  updatedFields: [String!]
  previousValues: AddressPreviousValues
}

input AddressSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AddressWhereInput
  AND: [AddressSubscriptionWhereInput!]
  OR: [AddressSubscriptionWhereInput!]
  NOT: [AddressSubscriptionWhereInput!]
}

input AddressUpdateManyMutationInput {
  singleLine: String
  streetAddress: String
  city: String
  stateProvince: String
  postalCode: String
  country: String
}

input AddressUpdateOneWithoutPostInput {
  create: AddressCreateWithoutPostInput
  update: AddressUpdateWithoutPostDataInput
  upsert: AddressUpsertWithoutPostInput
  delete: Boolean
  disconnect: Boolean
}

input AddressUpdateWithoutPostDataInput {
  singleLine: String
  streetAddress: String
  city: String
  stateProvince: String
  postalCode: String
  country: String
}

input AddressUpsertWithoutPostInput {
  update: AddressUpdateWithoutPostDataInput!
  create: AddressCreateWithoutPostInput!
}

input AddressWhereInput {
  post: PostWhereInput
  singleLine: String
  singleLine_not: String
  singleLine_in: [String!]
  singleLine_not_in: [String!]
  singleLine_lt: String
  singleLine_lte: String
  singleLine_gt: String
  singleLine_gte: String
  singleLine_contains: String
  singleLine_not_contains: String
  singleLine_starts_with: String
  singleLine_not_starts_with: String
  singleLine_ends_with: String
  singleLine_not_ends_with: String
  streetAddress: String
  streetAddress_not: String
  streetAddress_in: [String!]
  streetAddress_not_in: [String!]
  streetAddress_lt: String
  streetAddress_lte: String
  streetAddress_gt: String
  streetAddress_gte: String
  streetAddress_contains: String
  streetAddress_not_contains: String
  streetAddress_starts_with: String
  streetAddress_not_starts_with: String
  streetAddress_ends_with: String
  streetAddress_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  stateProvince: String
  stateProvince_not: String
  stateProvince_in: [String!]
  stateProvince_not_in: [String!]
  stateProvince_lt: String
  stateProvince_lte: String
  stateProvince_gt: String
  stateProvince_gte: String
  stateProvince_contains: String
  stateProvince_not_contains: String
  stateProvince_starts_with: String
  stateProvince_not_starts_with: String
  stateProvince_ends_with: String
  stateProvince_not_ends_with: String
  postalCode: String
  postalCode_not: String
  postalCode_in: [String!]
  postalCode_not_in: [String!]
  postalCode_lt: String
  postalCode_lte: String
  postalCode_gt: String
  postalCode_gte: String
  postalCode_contains: String
  postalCode_not_contains: String
  postalCode_starts_with: String
  postalCode_not_starts_with: String
  postalCode_ends_with: String
  postalCode_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  AND: [AddressWhereInput!]
  OR: [AddressWhereInput!]
  NOT: [AddressWhereInput!]
}

type AggregateAddress {
  count: Int!
}

type AggregateBookmark {
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

type AggregateTag {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Bookmark {
  id: ID!
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
  connect: [BookmarkWhereUniqueInput!]
}

input BookmarkCreateManyWithoutUserInput {
  create: [BookmarkCreateWithoutUserInput!]
  connect: [BookmarkWhereUniqueInput!]
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

type BookmarkPreviousValues {
  id: ID!
}

type BookmarkSubscriptionPayload {
  mutation: MutationType!
  node: Bookmark
  updatedFields: [String!]
  previousValues: BookmarkPreviousValues
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

input BookmarkUpdateInput {
  user: UserUpdateOneRequiredWithoutBookmarksInput
  post: PostUpdateOneRequiredWithoutBookmarksInput
}

input BookmarkUpdateManyWithoutPostInput {
  create: [BookmarkCreateWithoutPostInput!]
  delete: [BookmarkWhereUniqueInput!]
  connect: [BookmarkWhereUniqueInput!]
  disconnect: [BookmarkWhereUniqueInput!]
  update: [BookmarkUpdateWithWhereUniqueWithoutPostInput!]
  upsert: [BookmarkUpsertWithWhereUniqueWithoutPostInput!]
}

input BookmarkUpdateManyWithoutUserInput {
  create: [BookmarkCreateWithoutUserInput!]
  delete: [BookmarkWhereUniqueInput!]
  connect: [BookmarkWhereUniqueInput!]
  disconnect: [BookmarkWhereUniqueInput!]
  update: [BookmarkUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [BookmarkUpsertWithWhereUniqueWithoutUserInput!]
}

input BookmarkUpdateWithoutPostDataInput {
  user: UserUpdateOneRequiredWithoutBookmarksInput
}

input BookmarkUpdateWithoutUserDataInput {
  post: PostUpdateOneRequiredWithoutBookmarksInput
}

input BookmarkUpdateWithWhereUniqueWithoutPostInput {
  where: BookmarkWhereUniqueInput!
  data: BookmarkUpdateWithoutPostDataInput!
}

input BookmarkUpdateWithWhereUniqueWithoutUserInput {
  where: BookmarkWhereUniqueInput!
  data: BookmarkUpdateWithoutUserDataInput!
}

input BookmarkUpsertWithWhereUniqueWithoutPostInput {
  where: BookmarkWhereUniqueInput!
  update: BookmarkUpdateWithoutPostDataInput!
  create: BookmarkCreateWithoutPostInput!
}

input BookmarkUpsertWithWhereUniqueWithoutUserInput {
  where: BookmarkWhereUniqueInput!
  update: BookmarkUpdateWithoutUserDataInput!
  create: BookmarkCreateWithoutUserInput!
}

input BookmarkWhereInput {
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
  user: UserWhereInput
  post: PostWhereInput
  AND: [BookmarkWhereInput!]
  OR: [BookmarkWhereInput!]
  NOT: [BookmarkWhereInput!]
}

input BookmarkWhereUniqueInput {
  id: ID
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
  id: ID!
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
  connect: GeolocationWhereUniqueInput
}

type GeolocationEdge {
  node: Geolocation!
  cursor: String!
}

enum GeolocationOrderByInput {
  id_ASC
  id_DESC
  lat_ASC
  lat_DESC
  long_ASC
  long_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GeolocationPreviousValues {
  id: ID!
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

input GeolocationUpdateInput {
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
  connect: GeolocationWhereUniqueInput
}

input GeolocationUpsertNestedInput {
  update: GeolocationUpdateDataInput!
  create: GeolocationCreateInput!
}

input GeolocationWhereInput {
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

input GeolocationWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createAddress(data: AddressCreateInput!): Address!
  updateManyAddresses(data: AddressUpdateManyMutationInput!, where: AddressWhereInput): BatchPayload!
  deleteManyAddresses(where: AddressWhereInput): BatchPayload!
  createBookmark(data: BookmarkCreateInput!): Bookmark!
  updateBookmark(data: BookmarkUpdateInput!, where: BookmarkWhereUniqueInput!): Bookmark
  upsertBookmark(where: BookmarkWhereUniqueInput!, create: BookmarkCreateInput!, update: BookmarkUpdateInput!): Bookmark!
  deleteBookmark(where: BookmarkWhereUniqueInput!): Bookmark
  deleteManyBookmarks(where: BookmarkWhereInput): BatchPayload!
  createGeolocation(data: GeolocationCreateInput!): Geolocation!
  updateGeolocation(data: GeolocationUpdateInput!, where: GeolocationWhereUniqueInput!): Geolocation
  updateManyGeolocations(data: GeolocationUpdateManyMutationInput!, where: GeolocationWhereInput): BatchPayload!
  upsertGeolocation(where: GeolocationWhereUniqueInput!, create: GeolocationCreateInput!, update: GeolocationUpdateInput!): Geolocation!
  deleteGeolocation(where: GeolocationWhereUniqueInput!): Geolocation
  deleteManyGeolocations(where: GeolocationWhereInput): BatchPayload!
  createPhoto(data: PhotoCreateInput!): Photo!
  updatePhoto(data: PhotoUpdateInput!, where: PhotoWhereUniqueInput!): Photo
  updateManyPhotos(data: PhotoUpdateManyMutationInput!, where: PhotoWhereInput): BatchPayload!
  upsertPhoto(where: PhotoWhereUniqueInput!, create: PhotoCreateInput!, update: PhotoUpdateInput!): Photo!
  deletePhoto(where: PhotoWhereUniqueInput!): Photo
  deleteManyPhotos(where: PhotoWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createTag(data: TagCreateInput!): Tag!
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteManyTags(where: TagWhereInput): BatchPayload!
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
  id: ID!
  url: String!
  postedBy: User!
  post: Post!
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
  postedBy: UserCreateOneInput!
  post: PostCreateOneWithoutPhotosInput!
  title: String
  description: String
  price: Int
  currency: CurrencyEnum
}

input PhotoCreateManyWithoutPostInput {
  create: [PhotoCreateWithoutPostInput!]
  connect: [PhotoWhereUniqueInput!]
}

input PhotoCreateWithoutPostInput {
  url: String!
  postedBy: UserCreateOneInput!
  title: String
  description: String
  price: Int
  currency: CurrencyEnum
}

type PhotoEdge {
  node: Photo!
  cursor: String!
}

enum PhotoOrderByInput {
  id_ASC
  id_DESC
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
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PhotoPreviousValues {
  id: ID!
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

input PhotoUpdateInput {
  url: String
  postedBy: UserUpdateOneRequiredInput
  post: PostUpdateOneRequiredWithoutPhotosInput
  title: String
  description: String
  price: Int
  currency: CurrencyEnum
}

input PhotoUpdateManyMutationInput {
  url: String
  title: String
  description: String
  price: Int
  currency: CurrencyEnum
}

input PhotoUpdateManyWithoutPostInput {
  create: [PhotoCreateWithoutPostInput!]
  delete: [PhotoWhereUniqueInput!]
  connect: [PhotoWhereUniqueInput!]
  disconnect: [PhotoWhereUniqueInput!]
  update: [PhotoUpdateWithWhereUniqueWithoutPostInput!]
  upsert: [PhotoUpsertWithWhereUniqueWithoutPostInput!]
}

input PhotoUpdateWithoutPostDataInput {
  url: String
  postedBy: UserUpdateOneRequiredInput
  title: String
  description: String
  price: Int
  currency: CurrencyEnum
}

input PhotoUpdateWithWhereUniqueWithoutPostInput {
  where: PhotoWhereUniqueInput!
  data: PhotoUpdateWithoutPostDataInput!
}

input PhotoUpsertWithWhereUniqueWithoutPostInput {
  where: PhotoWhereUniqueInput!
  update: PhotoUpdateWithoutPostDataInput!
  create: PhotoCreateWithoutPostInput!
}

input PhotoWhereInput {
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
  postedBy: UserWhereInput
  post: PostWhereInput
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

input PhotoWhereUniqueInput {
  id: ID
}

type Post {
  id: ID!
  address: Address
  postedBy: User!
  title: String!
  title_normalized: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  startsAt: DateTime!
  endsAt: DateTime!
  geolocation: Geolocation
  bookmarks(where: BookmarkWhereInput, orderBy: BookmarkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bookmark!]
  photos(where: PhotoWhereInput, orderBy: PhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Photo!]
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  active: Boolean!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  address: AddressCreateOneWithoutPostInput
  postedBy: UserCreateOneWithoutPostsInput!
  title: String!
  title_normalized: String!
  startsAt: DateTime!
  endsAt: DateTime!
  geolocation: GeolocationCreateOneInput
  bookmarks: BookmarkCreateManyWithoutPostInput
  photos: PhotoCreateManyWithoutPostInput
  tags: TagCreateManyInput
  active: Boolean
}

input PostCreateManyWithoutPostedByInput {
  create: [PostCreateWithoutPostedByInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateOneWithoutAddressInput {
  create: PostCreateWithoutAddressInput
  connect: PostWhereUniqueInput
}

input PostCreateOneWithoutBookmarksInput {
  create: PostCreateWithoutBookmarksInput
  connect: PostWhereUniqueInput
}

input PostCreateOneWithoutPhotosInput {
  create: PostCreateWithoutPhotosInput
  connect: PostWhereUniqueInput
}

input PostCreateWithoutAddressInput {
  postedBy: UserCreateOneWithoutPostsInput!
  title: String!
  title_normalized: String!
  startsAt: DateTime!
  endsAt: DateTime!
  geolocation: GeolocationCreateOneInput
  bookmarks: BookmarkCreateManyWithoutPostInput
  photos: PhotoCreateManyWithoutPostInput
  tags: TagCreateManyInput
  active: Boolean
}

input PostCreateWithoutBookmarksInput {
  address: AddressCreateOneWithoutPostInput
  postedBy: UserCreateOneWithoutPostsInput!
  title: String!
  title_normalized: String!
  startsAt: DateTime!
  endsAt: DateTime!
  geolocation: GeolocationCreateOneInput
  photos: PhotoCreateManyWithoutPostInput
  tags: TagCreateManyInput
  active: Boolean
}

input PostCreateWithoutPhotosInput {
  address: AddressCreateOneWithoutPostInput
  postedBy: UserCreateOneWithoutPostsInput!
  title: String!
  title_normalized: String!
  startsAt: DateTime!
  endsAt: DateTime!
  geolocation: GeolocationCreateOneInput
  bookmarks: BookmarkCreateManyWithoutPostInput
  tags: TagCreateManyInput
  active: Boolean
}

input PostCreateWithoutPostedByInput {
  address: AddressCreateOneWithoutPostInput
  title: String!
  title_normalized: String!
  startsAt: DateTime!
  endsAt: DateTime!
  geolocation: GeolocationCreateOneInput
  bookmarks: BookmarkCreateManyWithoutPostInput
  photos: PhotoCreateManyWithoutPostInput
  tags: TagCreateManyInput
  active: Boolean
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
  title_normalized_ASC
  title_normalized_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  startsAt_ASC
  startsAt_DESC
  endsAt_ASC
  endsAt_DESC
  active_ASC
  active_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  title_normalized: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  startsAt: DateTime!
  endsAt: DateTime!
  active: Boolean!
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
  address: AddressUpdateOneWithoutPostInput
  postedBy: UserUpdateOneRequiredWithoutPostsInput
  title: String
  title_normalized: String
  startsAt: DateTime
  endsAt: DateTime
  geolocation: GeolocationUpdateOneInput
  bookmarks: BookmarkUpdateManyWithoutPostInput
  photos: PhotoUpdateManyWithoutPostInput
  tags: TagUpdateManyInput
  active: Boolean
}

input PostUpdateManyMutationInput {
  title: String
  title_normalized: String
  startsAt: DateTime
  endsAt: DateTime
  active: Boolean
}

input PostUpdateManyWithoutPostedByInput {
  create: [PostCreateWithoutPostedByInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutPostedByInput!]
}

input PostUpdateOneRequiredWithoutBookmarksInput {
  create: PostCreateWithoutBookmarksInput
  update: PostUpdateWithoutBookmarksDataInput
  upsert: PostUpsertWithoutBookmarksInput
  connect: PostWhereUniqueInput
}

input PostUpdateOneRequiredWithoutPhotosInput {
  create: PostCreateWithoutPhotosInput
  update: PostUpdateWithoutPhotosDataInput
  upsert: PostUpsertWithoutPhotosInput
  connect: PostWhereUniqueInput
}

input PostUpdateWithoutBookmarksDataInput {
  address: AddressUpdateOneWithoutPostInput
  postedBy: UserUpdateOneRequiredWithoutPostsInput
  title: String
  title_normalized: String
  startsAt: DateTime
  endsAt: DateTime
  geolocation: GeolocationUpdateOneInput
  photos: PhotoUpdateManyWithoutPostInput
  tags: TagUpdateManyInput
  active: Boolean
}

input PostUpdateWithoutPhotosDataInput {
  address: AddressUpdateOneWithoutPostInput
  postedBy: UserUpdateOneRequiredWithoutPostsInput
  title: String
  title_normalized: String
  startsAt: DateTime
  endsAt: DateTime
  geolocation: GeolocationUpdateOneInput
  bookmarks: BookmarkUpdateManyWithoutPostInput
  tags: TagUpdateManyInput
  active: Boolean
}

input PostUpdateWithoutPostedByDataInput {
  address: AddressUpdateOneWithoutPostInput
  title: String
  title_normalized: String
  startsAt: DateTime
  endsAt: DateTime
  geolocation: GeolocationUpdateOneInput
  bookmarks: BookmarkUpdateManyWithoutPostInput
  photos: PhotoUpdateManyWithoutPostInput
  tags: TagUpdateManyInput
  active: Boolean
}

input PostUpdateWithWhereUniqueWithoutPostedByInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutPostedByDataInput!
}

input PostUpsertWithoutBookmarksInput {
  update: PostUpdateWithoutBookmarksDataInput!
  create: PostCreateWithoutBookmarksInput!
}

input PostUpsertWithoutPhotosInput {
  update: PostUpdateWithoutPhotosDataInput!
  create: PostCreateWithoutPhotosInput!
}

input PostUpsertWithWhereUniqueWithoutPostedByInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutPostedByDataInput!
  create: PostCreateWithoutPostedByInput!
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
  address: AddressWhereInput
  postedBy: UserWhereInput
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
  title_normalized: String
  title_normalized_not: String
  title_normalized_in: [String!]
  title_normalized_not_in: [String!]
  title_normalized_lt: String
  title_normalized_lte: String
  title_normalized_gt: String
  title_normalized_gte: String
  title_normalized_contains: String
  title_normalized_not_contains: String
  title_normalized_starts_with: String
  title_normalized_not_starts_with: String
  title_normalized_ends_with: String
  title_normalized_not_ends_with: String
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
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  active: Boolean
  active_not: Boolean
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address]!
  addressesConnection(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AddressConnection!
  bookmark(where: BookmarkWhereUniqueInput!): Bookmark
  bookmarks(where: BookmarkWhereInput, orderBy: BookmarkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bookmark]!
  bookmarksConnection(where: BookmarkWhereInput, orderBy: BookmarkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookmarkConnection!
  geolocation(where: GeolocationWhereUniqueInput!): Geolocation
  geolocations(where: GeolocationWhereInput, orderBy: GeolocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Geolocation]!
  geolocationsConnection(where: GeolocationWhereInput, orderBy: GeolocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GeolocationConnection!
  photo(where: PhotoWhereUniqueInput!): Photo
  photos(where: PhotoWhereInput, orderBy: PhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Photo]!
  photosConnection(where: PhotoWhereInput, orderBy: PhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PhotoConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  tag(where: TagWhereUniqueInput!): Tag
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  address(where: AddressSubscriptionWhereInput): AddressSubscriptionPayload
  bookmark(where: BookmarkSubscriptionWhereInput): BookmarkSubscriptionPayload
  geolocation(where: GeolocationSubscriptionWhereInput): GeolocationSubscriptionPayload
  photo(where: PhotoSubscriptionWhereInput): PhotoSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Tag {
  id: ID!
  name: String!
}

type TagConnection {
  pageInfo: PageInfo!
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  name: String!
}

input TagCreateManyInput {
  create: [TagCreateInput!]
  connect: [TagWhereUniqueInput!]
}

type TagEdge {
  node: Tag!
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TagPreviousValues {
  id: ID!
  name: String!
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TagWhereInput
  AND: [TagSubscriptionWhereInput!]
  OR: [TagSubscriptionWhereInput!]
  NOT: [TagSubscriptionWhereInput!]
}

input TagUpdateDataInput {
  name: String
}

input TagUpdateInput {
  name: String
}

input TagUpdateManyInput {
  create: [TagCreateInput!]
  update: [TagUpdateWithWhereUniqueNestedInput!]
  upsert: [TagUpsertWithWhereUniqueNestedInput!]
  delete: [TagWhereUniqueInput!]
  connect: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
}

input TagUpdateManyMutationInput {
  name: String
}

input TagUpdateWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput!
  data: TagUpdateDataInput!
}

input TagUpsertWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput!
  update: TagUpdateDataInput!
  create: TagCreateInput!
}

input TagWhereInput {
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
  AND: [TagWhereInput!]
  OR: [TagWhereInput!]
  NOT: [TagWhereInput!]
}

input TagWhereUniqueInput {
  id: ID
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
  posts: PostCreateManyWithoutPostedByInput
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
  posts: PostCreateManyWithoutPostedByInput
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

input UserUpdateDataInput {
  avatar: String
  email: String
  name: String
  password: String
  facebookId: String
  bookmarks: BookmarkUpdateManyWithoutUserInput
  posts: PostUpdateManyWithoutPostedByInput
}

input UserUpdateInput {
  avatar: String
  email: String
  name: String
  password: String
  facebookId: String
  bookmarks: BookmarkUpdateManyWithoutUserInput
  posts: PostUpdateManyWithoutPostedByInput
}

input UserUpdateManyMutationInput {
  avatar: String
  email: String
  name: String
  password: String
  facebookId: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutBookmarksInput {
  create: UserCreateWithoutBookmarksInput
  update: UserUpdateWithoutBookmarksDataInput
  upsert: UserUpsertWithoutBookmarksInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutBookmarksDataInput {
  avatar: String
  email: String
  name: String
  password: String
  facebookId: String
  posts: PostUpdateManyWithoutPostedByInput
}

input UserUpdateWithoutPostsDataInput {
  avatar: String
  email: String
  name: String
  password: String
  facebookId: String
  bookmarks: BookmarkUpdateManyWithoutUserInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutBookmarksInput {
  update: UserUpdateWithoutBookmarksDataInput!
  create: UserCreateWithoutBookmarksInput!
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