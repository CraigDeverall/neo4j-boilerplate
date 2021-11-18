export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date and time, represented as an ISO-8601 string */
  DateTime: any;
};

export type Auth = {
  __typename?: "Auth";
  access: Scalars["String"];
};

export type AuthCreateInput = {
  access: Scalars["String"];
};

export type AuthOptions = {
  /** Specify one or more AuthSort objects to sort Auths by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<AuthSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

/** Fields to sort Auths by. The order in which sorts are applied is not guaranteed when specifying many fields in one AuthSort object. */
export type AuthSort = {
  access?: Maybe<SortDirection>;
};

export type AuthUpdateInput = {
  access?: Maybe<Scalars["String"]>;
};

export type AuthWhere = {
  OR?: Maybe<Array<AuthWhere>>;
  AND?: Maybe<Array<AuthWhere>>;
  access?: Maybe<Scalars["String"]>;
  access_NOT?: Maybe<Scalars["String"]>;
  access_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  access_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  access_CONTAINS?: Maybe<Scalars["String"]>;
  access_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  access_STARTS_WITH?: Maybe<Scalars["String"]>;
  access_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  access_ENDS_WITH?: Maybe<Scalars["String"]>;
  access_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
};

export enum BornWith {
  Penis = "PENIS",
  Vagina = "VAGINA",
  Both = "BOTH",
  WontSay = "WONT_SAY",
}

export type CreateAuthsMutationResponse = {
  __typename?: "CreateAuthsMutationResponse";
  auths: Array<Auth>;
};

export type CreateEthnicitiesMutationResponse = {
  __typename?: "CreateEthnicitiesMutationResponse";
  ethnicities: Array<Ethnicity>;
};

export type CreateLocationsMutationResponse = {
  __typename?: "CreateLocationsMutationResponse";
  locations: Array<Location>;
};

export type CreateMediaMutationResponse = {
  __typename?: "CreateMediaMutationResponse";
  media: Array<Media>;
};

export type CreateProfilesMutationResponse = {
  __typename?: "CreateProfilesMutationResponse";
  profiles: Array<Profile>;
};

export type CreateRefreshTokensMutationResponse = {
  __typename?: "CreateRefreshTokensMutationResponse";
  refreshTokens: Array<RefreshToken>;
};

export type CreateRolesMutationResponse = {
  __typename?: "CreateRolesMutationResponse";
  roles: Array<Role>;
};

export type CreateServicesMutationResponse = {
  __typename?: "CreateServicesMutationResponse";
  services: Array<Service>;
};

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse";
  users: Array<User>;
};

export enum Day {
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
}

export type DeleteInfo = {
  __typename?: "DeleteInfo";
  nodesDeleted: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type Ethnicity = {
  __typename?: "Ethnicity";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type EthnicityConnectWhere = {
  node: EthnicityWhere;
};

export type EthnicityCreateInput = {
  name: Scalars["String"];
};

export type EthnicityOptions = {
  /** Specify one or more EthnicitySort objects to sort Ethnicities by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<EthnicitySort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

/** Fields to sort Ethnicities by. The order in which sorts are applied is not guaranteed when specifying many fields in one EthnicitySort object. */
export type EthnicitySort = {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
};

export type EthnicityUpdateInput = {
  name?: Maybe<Scalars["String"]>;
};

export type EthnicityWhere = {
  OR?: Maybe<Array<EthnicityWhere>>;
  AND?: Maybe<Array<EthnicityWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
};

export type Location = {
  __typename?: "Location";
  id: Scalars["ID"];
  address: Scalars["String"];
  location: Point;
};

export type LocationConnectWhere = {
  node: LocationWhere;
};

export type LocationCreateInput = {
  address: Scalars["String"];
  location: PointInput;
};

export type LocationOptions = {
  /** Specify one or more LocationSort objects to sort Locations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<LocationSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

/** Fields to sort Locations by. The order in which sorts are applied is not guaranteed when specifying many fields in one LocationSort object. */
export type LocationSort = {
  id?: Maybe<SortDirection>;
  address?: Maybe<SortDirection>;
  location?: Maybe<SortDirection>;
};

export type LocationUpdateInput = {
  address?: Maybe<Scalars["String"]>;
  location?: Maybe<PointInput>;
};

export type LocationWhere = {
  OR?: Maybe<Array<LocationWhere>>;
  AND?: Maybe<Array<LocationWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  address_NOT?: Maybe<Scalars["String"]>;
  address_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  address_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  address_CONTAINS?: Maybe<Scalars["String"]>;
  address_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  address_STARTS_WITH?: Maybe<Scalars["String"]>;
  address_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  address_ENDS_WITH?: Maybe<Scalars["String"]>;
  address_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  location?: Maybe<PointInput>;
  location_NOT?: Maybe<PointInput>;
  location_IN?: Maybe<Array<Maybe<PointInput>>>;
  location_NOT_IN?: Maybe<Array<Maybe<PointInput>>>;
  location_DISTANCE?: Maybe<PointDistance>;
  location_LT?: Maybe<PointDistance>;
  location_LTE?: Maybe<PointDistance>;
  location_GT?: Maybe<PointDistance>;
  location_GTE?: Maybe<PointDistance>;
};

export type Media = {
  __typename?: "Media";
  id: Scalars["ID"];
  pathOnDisk: Scalars["String"];
  type: MediaType;
  uploaded?: Maybe<User>;
  profile?: Maybe<Profile>;
  uploadedConnection: MediaUploadedConnection;
  profileConnection: MediaProfileConnection;
};

export type MediaUploadedArgs = {
  where?: Maybe<UserWhere>;
  options?: Maybe<UserOptions>;
};

export type MediaProfileArgs = {
  where?: Maybe<ProfileWhere>;
  options?: Maybe<ProfileOptions>;
};

export type MediaUploadedConnectionArgs = {
  where?: Maybe<MediaUploadedConnectionWhere>;
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  sort?: Maybe<Array<MediaUploadedConnectionSort>>;
};

export type MediaProfileConnectionArgs = {
  where?: Maybe<MediaProfileConnectionWhere>;
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  sort?: Maybe<Array<MediaProfileConnectionSort>>;
};

export type MediaConnectInput = {
  uploaded?: Maybe<MediaUploadedConnectFieldInput>;
  profile?: Maybe<MediaProfileConnectFieldInput>;
};

export type MediaConnectWhere = {
  node: MediaWhere;
};

export type MediaCreateInput = {
  pathOnDisk: Scalars["String"];
  type: MediaType;
  uploaded?: Maybe<MediaUploadedFieldInput>;
  profile?: Maybe<MediaProfileFieldInput>;
};

export type MediaDeleteInput = {
  uploaded?: Maybe<MediaUploadedDeleteFieldInput>;
  profile?: Maybe<MediaProfileDeleteFieldInput>;
};

export type MediaDisconnectInput = {
  uploaded?: Maybe<MediaUploadedDisconnectFieldInput>;
  profile?: Maybe<MediaProfileDisconnectFieldInput>;
};

export type MediaOptions = {
  /** Specify one or more MediaSort objects to sort Media by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<MediaSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type MediaProfileConnectFieldInput = {
  where?: Maybe<ProfileConnectWhere>;
  connect?: Maybe<ProfileConnectInput>;
};

export type MediaProfileConnection = {
  __typename?: "MediaProfileConnection";
  edges: Array<MediaProfileRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type MediaProfileConnectionSort = {
  node?: Maybe<ProfileSort>;
};

export type MediaProfileConnectionWhere = {
  AND?: Maybe<Array<MediaProfileConnectionWhere>>;
  OR?: Maybe<Array<MediaProfileConnectionWhere>>;
  node?: Maybe<ProfileWhere>;
  node_NOT?: Maybe<ProfileWhere>;
};

export type MediaProfileCreateFieldInput = {
  node: ProfileCreateInput;
};

export type MediaProfileDeleteFieldInput = {
  where?: Maybe<MediaProfileConnectionWhere>;
  delete?: Maybe<ProfileDeleteInput>;
};

export type MediaProfileDisconnectFieldInput = {
  where?: Maybe<MediaProfileConnectionWhere>;
  disconnect?: Maybe<ProfileDisconnectInput>;
};

export type MediaProfileFieldInput = {
  create?: Maybe<MediaProfileCreateFieldInput>;
  connect?: Maybe<MediaProfileConnectFieldInput>;
};

export type MediaProfileRelationship = {
  __typename?: "MediaProfileRelationship";
  cursor: Scalars["String"];
  node: Profile;
};

export type MediaProfileUpdateConnectionInput = {
  node?: Maybe<ProfileUpdateInput>;
};

export type MediaProfileUpdateFieldInput = {
  where?: Maybe<MediaProfileConnectionWhere>;
  update?: Maybe<MediaProfileUpdateConnectionInput>;
  connect?: Maybe<MediaProfileConnectFieldInput>;
  disconnect?: Maybe<MediaProfileDisconnectFieldInput>;
  create?: Maybe<MediaProfileCreateFieldInput>;
  delete?: Maybe<MediaProfileDeleteFieldInput>;
};

export type MediaRelationInput = {
  uploaded?: Maybe<MediaUploadedCreateFieldInput>;
  profile?: Maybe<MediaProfileCreateFieldInput>;
};

/** Fields to sort Media by. The order in which sorts are applied is not guaranteed when specifying many fields in one MediaSort object. */
export type MediaSort = {
  id?: Maybe<SortDirection>;
  pathOnDisk?: Maybe<SortDirection>;
  type?: Maybe<SortDirection>;
};

export enum MediaType {
  Video = "VIDEO",
  Image = "IMAGE",
}

export type MediaUpdateInput = {
  pathOnDisk?: Maybe<Scalars["String"]>;
  type?: Maybe<MediaType>;
  uploaded?: Maybe<MediaUploadedUpdateFieldInput>;
  profile?: Maybe<MediaProfileUpdateFieldInput>;
};

export type MediaUploadedConnectFieldInput = {
  where?: Maybe<UserConnectWhere>;
  connect?: Maybe<UserConnectInput>;
};

export type MediaUploadedConnection = {
  __typename?: "MediaUploadedConnection";
  edges: Array<MediaUploadedRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type MediaUploadedConnectionSort = {
  node?: Maybe<UserSort>;
};

export type MediaUploadedConnectionWhere = {
  AND?: Maybe<Array<MediaUploadedConnectionWhere>>;
  OR?: Maybe<Array<MediaUploadedConnectionWhere>>;
  node?: Maybe<UserWhere>;
  node_NOT?: Maybe<UserWhere>;
};

export type MediaUploadedCreateFieldInput = {
  node: UserCreateInput;
};

export type MediaUploadedDeleteFieldInput = {
  where?: Maybe<MediaUploadedConnectionWhere>;
  delete?: Maybe<UserDeleteInput>;
};

export type MediaUploadedDisconnectFieldInput = {
  where?: Maybe<MediaUploadedConnectionWhere>;
  disconnect?: Maybe<UserDisconnectInput>;
};

export type MediaUploadedFieldInput = {
  create?: Maybe<MediaUploadedCreateFieldInput>;
  connect?: Maybe<MediaUploadedConnectFieldInput>;
};

export type MediaUploadedRelationship = {
  __typename?: "MediaUploadedRelationship";
  cursor: Scalars["String"];
  node: User;
};

export type MediaUploadedUpdateConnectionInput = {
  node?: Maybe<UserUpdateInput>;
};

export type MediaUploadedUpdateFieldInput = {
  where?: Maybe<MediaUploadedConnectionWhere>;
  update?: Maybe<MediaUploadedUpdateConnectionInput>;
  connect?: Maybe<MediaUploadedConnectFieldInput>;
  disconnect?: Maybe<MediaUploadedDisconnectFieldInput>;
  create?: Maybe<MediaUploadedCreateFieldInput>;
  delete?: Maybe<MediaUploadedDeleteFieldInput>;
};

export type MediaWhere = {
  OR?: Maybe<Array<MediaWhere>>;
  AND?: Maybe<Array<MediaWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  pathOnDisk?: Maybe<Scalars["String"]>;
  pathOnDisk_NOT?: Maybe<Scalars["String"]>;
  pathOnDisk_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  pathOnDisk_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  pathOnDisk_CONTAINS?: Maybe<Scalars["String"]>;
  pathOnDisk_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  pathOnDisk_STARTS_WITH?: Maybe<Scalars["String"]>;
  pathOnDisk_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  pathOnDisk_ENDS_WITH?: Maybe<Scalars["String"]>;
  pathOnDisk_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  type?: Maybe<MediaType>;
  type_NOT?: Maybe<MediaType>;
  type_IN?: Maybe<Array<Maybe<MediaType>>>;
  type_NOT_IN?: Maybe<Array<Maybe<MediaType>>>;
  uploaded?: Maybe<UserWhere>;
  uploaded_NOT?: Maybe<UserWhere>;
  profile?: Maybe<ProfileWhere>;
  profile_NOT?: Maybe<ProfileWhere>;
  uploadedConnection?: Maybe<MediaUploadedConnectionWhere>;
  uploadedConnection_NOT?: Maybe<MediaUploadedConnectionWhere>;
  profileConnection?: Maybe<MediaProfileConnectionWhere>;
  profileConnection_NOT?: Maybe<MediaProfileConnectionWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  signIn?: Maybe<Auth>;
  signUp?: Maybe<Auth>;
  refreshAccess?: Maybe<Auth>;
  createRoles: CreateRolesMutationResponse;
  deleteRoles: DeleteInfo;
  updateRoles: UpdateRolesMutationResponse;
  createLocations: CreateLocationsMutationResponse;
  deleteLocations: DeleteInfo;
  updateLocations: UpdateLocationsMutationResponse;
  createEthnicities: CreateEthnicitiesMutationResponse;
  deleteEthnicities: DeleteInfo;
  updateEthnicities: UpdateEthnicitiesMutationResponse;
  createServices: CreateServicesMutationResponse;
  deleteServices: DeleteInfo;
  updateServices: UpdateServicesMutationResponse;
  createAuths: CreateAuthsMutationResponse;
  deleteAuths: DeleteInfo;
  updateAuths: UpdateAuthsMutationResponse;
  createRefreshTokens: CreateRefreshTokensMutationResponse;
  deleteRefreshTokens: DeleteInfo;
  updateRefreshTokens: UpdateRefreshTokensMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
  createProfiles: CreateProfilesMutationResponse;
  deleteProfiles: DeleteInfo;
  updateProfiles: UpdateProfilesMutationResponse;
  createMedia: CreateMediaMutationResponse;
  deleteMedia: DeleteInfo;
  updateMedia: UpdateMediaMutationResponse;
};

export type MutationSignInArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationSignUpArgs = {
  name: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationCreateRolesArgs = {
  input: Array<RoleCreateInput>;
};

export type MutationDeleteRolesArgs = {
  where?: Maybe<RoleWhere>;
};

export type MutationUpdateRolesArgs = {
  where?: Maybe<RoleWhere>;
  update?: Maybe<RoleUpdateInput>;
};

export type MutationCreateLocationsArgs = {
  input: Array<LocationCreateInput>;
};

export type MutationDeleteLocationsArgs = {
  where?: Maybe<LocationWhere>;
};

export type MutationUpdateLocationsArgs = {
  where?: Maybe<LocationWhere>;
  update?: Maybe<LocationUpdateInput>;
};

export type MutationCreateEthnicitiesArgs = {
  input: Array<EthnicityCreateInput>;
};

export type MutationDeleteEthnicitiesArgs = {
  where?: Maybe<EthnicityWhere>;
};

export type MutationUpdateEthnicitiesArgs = {
  where?: Maybe<EthnicityWhere>;
  update?: Maybe<EthnicityUpdateInput>;
};

export type MutationCreateServicesArgs = {
  input: Array<ServiceCreateInput>;
};

export type MutationDeleteServicesArgs = {
  where?: Maybe<ServiceWhere>;
  delete?: Maybe<ServiceDeleteInput>;
};

export type MutationUpdateServicesArgs = {
  where?: Maybe<ServiceWhere>;
  update?: Maybe<ServiceUpdateInput>;
  connect?: Maybe<ServiceConnectInput>;
  disconnect?: Maybe<ServiceDisconnectInput>;
  create?: Maybe<ServiceRelationInput>;
  delete?: Maybe<ServiceDeleteInput>;
};

export type MutationCreateAuthsArgs = {
  input: Array<AuthCreateInput>;
};

export type MutationDeleteAuthsArgs = {
  where?: Maybe<AuthWhere>;
};

export type MutationUpdateAuthsArgs = {
  where?: Maybe<AuthWhere>;
  update?: Maybe<AuthUpdateInput>;
};

export type MutationCreateRefreshTokensArgs = {
  input: Array<RefreshTokenCreateInput>;
};

export type MutationDeleteRefreshTokensArgs = {
  where?: Maybe<RefreshTokenWhere>;
  delete?: Maybe<RefreshTokenDeleteInput>;
};

export type MutationUpdateRefreshTokensArgs = {
  where?: Maybe<RefreshTokenWhere>;
  update?: Maybe<RefreshTokenUpdateInput>;
  connect?: Maybe<RefreshTokenConnectInput>;
  disconnect?: Maybe<RefreshTokenDisconnectInput>;
  create?: Maybe<RefreshTokenRelationInput>;
  delete?: Maybe<RefreshTokenDeleteInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteUsersArgs = {
  where?: Maybe<UserWhere>;
  delete?: Maybe<UserDeleteInput>;
};

export type MutationUpdateUsersArgs = {
  where?: Maybe<UserWhere>;
  update?: Maybe<UserUpdateInput>;
  connect?: Maybe<UserConnectInput>;
  disconnect?: Maybe<UserDisconnectInput>;
  create?: Maybe<UserRelationInput>;
  delete?: Maybe<UserDeleteInput>;
};

export type MutationCreateProfilesArgs = {
  input: Array<ProfileCreateInput>;
};

export type MutationDeleteProfilesArgs = {
  where?: Maybe<ProfileWhere>;
  delete?: Maybe<ProfileDeleteInput>;
};

export type MutationUpdateProfilesArgs = {
  where?: Maybe<ProfileWhere>;
  update?: Maybe<ProfileUpdateInput>;
  connect?: Maybe<ProfileConnectInput>;
  disconnect?: Maybe<ProfileDisconnectInput>;
  create?: Maybe<ProfileRelationInput>;
  delete?: Maybe<ProfileDeleteInput>;
};

export type MutationCreateMediaArgs = {
  input: Array<MediaCreateInput>;
};

export type MutationDeleteMediaArgs = {
  where?: Maybe<MediaWhere>;
  delete?: Maybe<MediaDeleteInput>;
};

export type MutationUpdateMediaArgs = {
  where?: Maybe<MediaWhere>;
  update?: Maybe<MediaUpdateInput>;
  connect?: Maybe<MediaConnectInput>;
  disconnect?: Maybe<MediaDisconnectInput>;
  create?: Maybe<MediaRelationInput>;
  delete?: Maybe<MediaDeleteInput>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
};

export type Point = {
  __typename?: "Point";
  longitude: Scalars["Float"];
  latitude: Scalars["Float"];
  height?: Maybe<Scalars["Float"]>;
  crs: Scalars["String"];
  srid: Scalars["Int"];
};

export type PointDistance = {
  point: PointInput;
  /** The distance in metres to be used when comparing two points */
  distance: Scalars["Float"];
};

export type PointInput = {
  longitude: Scalars["Float"];
  latitude: Scalars["Float"];
  height?: Maybe<Scalars["Float"]>;
};

export type Profile = {
  __typename?: "Profile";
  id: Scalars["ID"];
  name: Scalars["String"];
  description: Scalars["String"];
  pricingInformation: Scalars["String"];
  availability: Array<Maybe<Day>>;
  media?: Maybe<Array<Maybe<Media>>>;
  servicesOffered?: Maybe<Array<Maybe<Service>>>;
  user?: Maybe<User>;
  locationBase: Location;
  mediaConnection: ProfileMediaConnection;
  servicesOfferedConnection: ProfileServicesOfferedConnection;
  userConnection: ProfileUserConnection;
  locationBaseConnection: ProfileLocationBaseConnection;
};

export type ProfileMediaArgs = {
  where?: Maybe<MediaWhere>;
  options?: Maybe<MediaOptions>;
};

export type ProfileServicesOfferedArgs = {
  where?: Maybe<ServiceWhere>;
  options?: Maybe<ServiceOptions>;
};

export type ProfileUserArgs = {
  where?: Maybe<UserWhere>;
  options?: Maybe<UserOptions>;
};

export type ProfileLocationBaseArgs = {
  where?: Maybe<LocationWhere>;
  options?: Maybe<LocationOptions>;
};

export type ProfileMediaConnectionArgs = {
  where?: Maybe<ProfileMediaConnectionWhere>;
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  sort?: Maybe<Array<ProfileMediaConnectionSort>>;
};

export type ProfileServicesOfferedConnectionArgs = {
  where?: Maybe<ProfileServicesOfferedConnectionWhere>;
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  sort?: Maybe<Array<ProfileServicesOfferedConnectionSort>>;
};

export type ProfileUserConnectionArgs = {
  where?: Maybe<ProfileUserConnectionWhere>;
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  sort?: Maybe<Array<ProfileUserConnectionSort>>;
};

export type ProfileLocationBaseConnectionArgs = {
  where?: Maybe<ProfileLocationBaseConnectionWhere>;
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  sort?: Maybe<Array<ProfileLocationBaseConnectionSort>>;
};

export type ProfileConnectInput = {
  media?: Maybe<Array<ProfileMediaConnectFieldInput>>;
  servicesOffered?: Maybe<Array<ProfileServicesOfferedConnectFieldInput>>;
  user?: Maybe<ProfileUserConnectFieldInput>;
  locationBase?: Maybe<ProfileLocationBaseConnectFieldInput>;
};

export type ProfileConnectWhere = {
  node: ProfileWhere;
};

export type ProfileCreateInput = {
  name: Scalars["String"];
  description: Scalars["String"];
  pricingInformation: Scalars["String"];
  availability: Array<Maybe<Day>>;
  media?: Maybe<ProfileMediaFieldInput>;
  servicesOffered?: Maybe<ProfileServicesOfferedFieldInput>;
  user?: Maybe<ProfileUserFieldInput>;
  locationBase?: Maybe<ProfileLocationBaseFieldInput>;
};

export type ProfileDeleteInput = {
  media?: Maybe<Array<ProfileMediaDeleteFieldInput>>;
  servicesOffered?: Maybe<Array<ProfileServicesOfferedDeleteFieldInput>>;
  user?: Maybe<ProfileUserDeleteFieldInput>;
  locationBase?: Maybe<ProfileLocationBaseDeleteFieldInput>;
};

export type ProfileDisconnectInput = {
  media?: Maybe<Array<ProfileMediaDisconnectFieldInput>>;
  servicesOffered?: Maybe<Array<ProfileServicesOfferedDisconnectFieldInput>>;
  user?: Maybe<ProfileUserDisconnectFieldInput>;
  locationBase?: Maybe<ProfileLocationBaseDisconnectFieldInput>;
};

export type ProfileLocationBaseConnectFieldInput = {
  where?: Maybe<LocationConnectWhere>;
};

export type ProfileLocationBaseConnection = {
  __typename?: "ProfileLocationBaseConnection";
  edges: Array<ProfileLocationBaseRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type ProfileLocationBaseConnectionSort = {
  node?: Maybe<LocationSort>;
};

export type ProfileLocationBaseConnectionWhere = {
  AND?: Maybe<Array<ProfileLocationBaseConnectionWhere>>;
  OR?: Maybe<Array<ProfileLocationBaseConnectionWhere>>;
  node?: Maybe<LocationWhere>;
  node_NOT?: Maybe<LocationWhere>;
};

export type ProfileLocationBaseCreateFieldInput = {
  node: LocationCreateInput;
};

export type ProfileLocationBaseDeleteFieldInput = {
  where?: Maybe<ProfileLocationBaseConnectionWhere>;
};

export type ProfileLocationBaseDisconnectFieldInput = {
  where?: Maybe<ProfileLocationBaseConnectionWhere>;
};

export type ProfileLocationBaseFieldInput = {
  create?: Maybe<ProfileLocationBaseCreateFieldInput>;
  connect?: Maybe<ProfileLocationBaseConnectFieldInput>;
};

export type ProfileLocationBaseRelationship = {
  __typename?: "ProfileLocationBaseRelationship";
  cursor: Scalars["String"];
  node: Location;
};

export type ProfileLocationBaseUpdateConnectionInput = {
  node?: Maybe<LocationUpdateInput>;
};

export type ProfileLocationBaseUpdateFieldInput = {
  where?: Maybe<ProfileLocationBaseConnectionWhere>;
  update?: Maybe<ProfileLocationBaseUpdateConnectionInput>;
  connect?: Maybe<ProfileLocationBaseConnectFieldInput>;
  disconnect?: Maybe<ProfileLocationBaseDisconnectFieldInput>;
  create?: Maybe<ProfileLocationBaseCreateFieldInput>;
  delete?: Maybe<ProfileLocationBaseDeleteFieldInput>;
};

export type ProfileMediaConnectFieldInput = {
  where?: Maybe<MediaConnectWhere>;
  connect?: Maybe<Array<MediaConnectInput>>;
};

export type ProfileMediaConnection = {
  __typename?: "ProfileMediaConnection";
  edges: Array<ProfileMediaRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type ProfileMediaConnectionSort = {
  node?: Maybe<MediaSort>;
};

export type ProfileMediaConnectionWhere = {
  AND?: Maybe<Array<ProfileMediaConnectionWhere>>;
  OR?: Maybe<Array<ProfileMediaConnectionWhere>>;
  node?: Maybe<MediaWhere>;
  node_NOT?: Maybe<MediaWhere>;
};

export type ProfileMediaCreateFieldInput = {
  node: MediaCreateInput;
};

export type ProfileMediaDeleteFieldInput = {
  where?: Maybe<ProfileMediaConnectionWhere>;
  delete?: Maybe<MediaDeleteInput>;
};

export type ProfileMediaDisconnectFieldInput = {
  where?: Maybe<ProfileMediaConnectionWhere>;
  disconnect?: Maybe<MediaDisconnectInput>;
};

export type ProfileMediaFieldInput = {
  create?: Maybe<Array<ProfileMediaCreateFieldInput>>;
  connect?: Maybe<Array<ProfileMediaConnectFieldInput>>;
};

export type ProfileMediaRelationship = {
  __typename?: "ProfileMediaRelationship";
  cursor: Scalars["String"];
  node: Media;
};

export type ProfileMediaUpdateConnectionInput = {
  node?: Maybe<MediaUpdateInput>;
};

export type ProfileMediaUpdateFieldInput = {
  where?: Maybe<ProfileMediaConnectionWhere>;
  update?: Maybe<ProfileMediaUpdateConnectionInput>;
  connect?: Maybe<Array<ProfileMediaConnectFieldInput>>;
  disconnect?: Maybe<Array<ProfileMediaDisconnectFieldInput>>;
  create?: Maybe<Array<ProfileMediaCreateFieldInput>>;
  delete?: Maybe<Array<ProfileMediaDeleteFieldInput>>;
};

export type ProfileOptions = {
  /** Specify one or more ProfileSort objects to sort Profiles by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ProfileSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type ProfileRelationInput = {
  media?: Maybe<Array<ProfileMediaCreateFieldInput>>;
  servicesOffered?: Maybe<Array<ProfileServicesOfferedCreateFieldInput>>;
  user?: Maybe<ProfileUserCreateFieldInput>;
  locationBase?: Maybe<ProfileLocationBaseCreateFieldInput>;
};

export type ProfileServicesOfferedConnectFieldInput = {
  where?: Maybe<ServiceConnectWhere>;
  connect?: Maybe<Array<ServiceConnectInput>>;
};

export type ProfileServicesOfferedConnection = {
  __typename?: "ProfileServicesOfferedConnection";
  edges: Array<ProfileServicesOfferedRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type ProfileServicesOfferedConnectionSort = {
  node?: Maybe<ServiceSort>;
};

export type ProfileServicesOfferedConnectionWhere = {
  AND?: Maybe<Array<ProfileServicesOfferedConnectionWhere>>;
  OR?: Maybe<Array<ProfileServicesOfferedConnectionWhere>>;
  node?: Maybe<ServiceWhere>;
  node_NOT?: Maybe<ServiceWhere>;
};

export type ProfileServicesOfferedCreateFieldInput = {
  node: ServiceCreateInput;
};

export type ProfileServicesOfferedDeleteFieldInput = {
  where?: Maybe<ProfileServicesOfferedConnectionWhere>;
  delete?: Maybe<ServiceDeleteInput>;
};

export type ProfileServicesOfferedDisconnectFieldInput = {
  where?: Maybe<ProfileServicesOfferedConnectionWhere>;
  disconnect?: Maybe<ServiceDisconnectInput>;
};

export type ProfileServicesOfferedFieldInput = {
  create?: Maybe<Array<ProfileServicesOfferedCreateFieldInput>>;
  connect?: Maybe<Array<ProfileServicesOfferedConnectFieldInput>>;
};

export type ProfileServicesOfferedRelationship = {
  __typename?: "ProfileServicesOfferedRelationship";
  cursor: Scalars["String"];
  node: Service;
};

export type ProfileServicesOfferedUpdateConnectionInput = {
  node?: Maybe<ServiceUpdateInput>;
};

export type ProfileServicesOfferedUpdateFieldInput = {
  where?: Maybe<ProfileServicesOfferedConnectionWhere>;
  update?: Maybe<ProfileServicesOfferedUpdateConnectionInput>;
  connect?: Maybe<Array<ProfileServicesOfferedConnectFieldInput>>;
  disconnect?: Maybe<Array<ProfileServicesOfferedDisconnectFieldInput>>;
  create?: Maybe<Array<ProfileServicesOfferedCreateFieldInput>>;
  delete?: Maybe<Array<ProfileServicesOfferedDeleteFieldInput>>;
};

/** Fields to sort Profiles by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProfileSort object. */
export type ProfileSort = {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  description?: Maybe<SortDirection>;
  pricingInformation?: Maybe<SortDirection>;
};

export type ProfileUpdateInput = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  pricingInformation?: Maybe<Scalars["String"]>;
  availability?: Maybe<Array<Maybe<Day>>>;
  media?: Maybe<Array<ProfileMediaUpdateFieldInput>>;
  servicesOffered?: Maybe<Array<ProfileServicesOfferedUpdateFieldInput>>;
  user?: Maybe<ProfileUserUpdateFieldInput>;
  locationBase?: Maybe<ProfileLocationBaseUpdateFieldInput>;
};

export type ProfileUserConnectFieldInput = {
  where?: Maybe<UserConnectWhere>;
  connect?: Maybe<UserConnectInput>;
};

export type ProfileUserConnection = {
  __typename?: "ProfileUserConnection";
  edges: Array<ProfileUserRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type ProfileUserConnectionSort = {
  node?: Maybe<UserSort>;
};

export type ProfileUserConnectionWhere = {
  AND?: Maybe<Array<ProfileUserConnectionWhere>>;
  OR?: Maybe<Array<ProfileUserConnectionWhere>>;
  node?: Maybe<UserWhere>;
  node_NOT?: Maybe<UserWhere>;
};

export type ProfileUserCreateFieldInput = {
  node: UserCreateInput;
};

export type ProfileUserDeleteFieldInput = {
  where?: Maybe<ProfileUserConnectionWhere>;
  delete?: Maybe<UserDeleteInput>;
};

export type ProfileUserDisconnectFieldInput = {
  where?: Maybe<ProfileUserConnectionWhere>;
  disconnect?: Maybe<UserDisconnectInput>;
};

export type ProfileUserFieldInput = {
  create?: Maybe<ProfileUserCreateFieldInput>;
  connect?: Maybe<ProfileUserConnectFieldInput>;
};

export type ProfileUserRelationship = {
  __typename?: "ProfileUserRelationship";
  cursor: Scalars["String"];
  node: User;
};

export type ProfileUserUpdateConnectionInput = {
  node?: Maybe<UserUpdateInput>;
};

export type ProfileUserUpdateFieldInput = {
  where?: Maybe<ProfileUserConnectionWhere>;
  update?: Maybe<ProfileUserUpdateConnectionInput>;
  connect?: Maybe<ProfileUserConnectFieldInput>;
  disconnect?: Maybe<ProfileUserDisconnectFieldInput>;
  create?: Maybe<ProfileUserCreateFieldInput>;
  delete?: Maybe<ProfileUserDeleteFieldInput>;
};

export type ProfileWhere = {
  OR?: Maybe<Array<ProfileWhere>>;
  AND?: Maybe<Array<ProfileWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_NOT?: Maybe<Scalars["String"]>;
  description_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_CONTAINS?: Maybe<Scalars["String"]>;
  description_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  description_STARTS_WITH?: Maybe<Scalars["String"]>;
  description_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  description_ENDS_WITH?: Maybe<Scalars["String"]>;
  description_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  pricingInformation?: Maybe<Scalars["String"]>;
  priceInformation_NOT?: Maybe<Scalars["String"]>;
  priceInformation_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  priceInformation_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  priceInformation_CONTAINS?: Maybe<Scalars["String"]>;
  priceInformation_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  priceInformation_STARTS_WITH?: Maybe<Scalars["String"]>;
  priceInformation_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  priceInformation_ENDS_WITH?: Maybe<Scalars["String"]>;
  priceInformation_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  availability?: Maybe<Array<Maybe<Day>>>;
  availability_NOT?: Maybe<Array<Maybe<Day>>>;
  availability_INCLUDES?: Maybe<Day>;
  availability_NOT_INCLUDES?: Maybe<Day>;
  media?: Maybe<MediaWhere>;
  media_NOT?: Maybe<MediaWhere>;
  servicesOffered?: Maybe<ServiceWhere>;
  servicesOffered_NOT?: Maybe<ServiceWhere>;
  user?: Maybe<UserWhere>;
  user_NOT?: Maybe<UserWhere>;
  locationBase?: Maybe<LocationWhere>;
  locationBase_NOT?: Maybe<LocationWhere>;
  mediaConnection?: Maybe<ProfileMediaConnectionWhere>;
  mediaConnection_NOT?: Maybe<ProfileMediaConnectionWhere>;
  servicesOfferedConnection?: Maybe<ProfileServicesOfferedConnectionWhere>;
  servicesOfferedConnection_NOT?: Maybe<ProfileServicesOfferedConnectionWhere>;
  userConnection?: Maybe<ProfileUserConnectionWhere>;
  userConnection_NOT?: Maybe<ProfileUserConnectionWhere>;
  locationBaseConnection?: Maybe<ProfileLocationBaseConnectionWhere>;
  locationBaseConnection_NOT?: Maybe<ProfileLocationBaseConnectionWhere>;
};

export type Query = {
  __typename?: "Query";
  roles: Array<Role>;
  rolesCount: Scalars["Int"];
  locations: Array<Location>;
  locationsCount: Scalars["Int"];
  ethnicities: Array<Ethnicity>;
  ethnicitiesCount: Scalars["Int"];
  services: Array<Service>;
  servicesCount: Scalars["Int"];
  auths: Array<Auth>;
  authsCount: Scalars["Int"];
  refreshTokens: Array<RefreshToken>;
  refreshTokensCount: Scalars["Int"];
  users: Array<User>;
  usersCount: Scalars["Int"];
  profiles: Array<Profile>;
  profilesCount: Scalars["Int"];
  media: Array<Media>;
  mediaCount: Scalars["Int"];
};

export type QueryRolesArgs = {
  where?: Maybe<RoleWhere>;
  options?: Maybe<RoleOptions>;
};

export type QueryRolesCountArgs = {
  where?: Maybe<RoleWhere>;
};

export type QueryLocationsArgs = {
  where?: Maybe<LocationWhere>;
  options?: Maybe<LocationOptions>;
};

export type QueryLocationsCountArgs = {
  where?: Maybe<LocationWhere>;
};

export type QueryEthnicitiesArgs = {
  where?: Maybe<EthnicityWhere>;
  options?: Maybe<EthnicityOptions>;
};

export type QueryEthnicitiesCountArgs = {
  where?: Maybe<EthnicityWhere>;
};

export type QueryServicesArgs = {
  where?: Maybe<ServiceWhere>;
  options?: Maybe<ServiceOptions>;
};

export type QueryServicesCountArgs = {
  where?: Maybe<ServiceWhere>;
};

export type QueryAuthsArgs = {
  where?: Maybe<AuthWhere>;
  options?: Maybe<AuthOptions>;
};

export type QueryAuthsCountArgs = {
  where?: Maybe<AuthWhere>;
};

export type QueryRefreshTokensArgs = {
  where?: Maybe<RefreshTokenWhere>;
  options?: Maybe<RefreshTokenOptions>;
};

export type QueryRefreshTokensCountArgs = {
  where?: Maybe<RefreshTokenWhere>;
};

export type QueryUsersArgs = {
  where?: Maybe<UserWhere>;
  options?: Maybe<UserOptions>;
};

export type QueryUsersCountArgs = {
  where?: Maybe<UserWhere>;
};

export type QueryProfilesArgs = {
  where?: Maybe<ProfileWhere>;
  options?: Maybe<ProfileOptions>;
};

export type QueryProfilesCountArgs = {
  where?: Maybe<ProfileWhere>;
};

export type QueryMediaArgs = {
  where?: Maybe<MediaWhere>;
  options?: Maybe<MediaOptions>;
};

export type QueryMediaCountArgs = {
  where?: Maybe<MediaWhere>;
};

export type RefreshToken = {
  __typename?: "RefreshToken";
  id: Scalars["ID"];
  user?: Maybe<User>;
  userConnection: RefreshTokenUserConnection;
};

export type RefreshTokenUserArgs = {
  where?: Maybe<UserWhere>;
  options?: Maybe<UserOptions>;
};

export type RefreshTokenUserConnectionArgs = {
  where?: Maybe<RefreshTokenUserConnectionWhere>;
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  sort?: Maybe<Array<RefreshTokenUserConnectionSort>>;
};

export type RefreshTokenConnectInput = {
  user?: Maybe<RefreshTokenUserConnectFieldInput>;
};

export type RefreshTokenCreateInput = {
  id: Scalars["ID"];
  user?: Maybe<RefreshTokenUserFieldInput>;
};

export type RefreshTokenDeleteInput = {
  user?: Maybe<RefreshTokenUserDeleteFieldInput>;
};

export type RefreshTokenDisconnectInput = {
  user?: Maybe<RefreshTokenUserDisconnectFieldInput>;
};

export type RefreshTokenOptions = {
  /** Specify one or more RefreshTokenSort objects to sort RefreshTokens by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<RefreshTokenSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type RefreshTokenRelationInput = {
  user?: Maybe<RefreshTokenUserCreateFieldInput>;
};

/** Fields to sort RefreshTokens by. The order in which sorts are applied is not guaranteed when specifying many fields in one RefreshTokenSort object. */
export type RefreshTokenSort = {
  id?: Maybe<SortDirection>;
};

export type RefreshTokenUpdateInput = {
  id?: Maybe<Scalars["ID"]>;
  user?: Maybe<RefreshTokenUserUpdateFieldInput>;
};

export type RefreshTokenUserConnectFieldInput = {
  where?: Maybe<UserConnectWhere>;
  connect?: Maybe<UserConnectInput>;
};

export type RefreshTokenUserConnection = {
  __typename?: "RefreshTokenUserConnection";
  edges: Array<RefreshTokenUserRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type RefreshTokenUserConnectionSort = {
  node?: Maybe<UserSort>;
};

export type RefreshTokenUserConnectionWhere = {
  AND?: Maybe<Array<RefreshTokenUserConnectionWhere>>;
  OR?: Maybe<Array<RefreshTokenUserConnectionWhere>>;
  node?: Maybe<UserWhere>;
  node_NOT?: Maybe<UserWhere>;
};

export type RefreshTokenUserCreateFieldInput = {
  node: UserCreateInput;
};

export type RefreshTokenUserDeleteFieldInput = {
  where?: Maybe<RefreshTokenUserConnectionWhere>;
  delete?: Maybe<UserDeleteInput>;
};

export type RefreshTokenUserDisconnectFieldInput = {
  where?: Maybe<RefreshTokenUserConnectionWhere>;
  disconnect?: Maybe<UserDisconnectInput>;
};

export type RefreshTokenUserFieldInput = {
  create?: Maybe<RefreshTokenUserCreateFieldInput>;
  connect?: Maybe<RefreshTokenUserConnectFieldInput>;
};

export type RefreshTokenUserRelationship = {
  __typename?: "RefreshTokenUserRelationship";
  cursor: Scalars["String"];
  node: User;
};

export type RefreshTokenUserUpdateConnectionInput = {
  node?: Maybe<UserUpdateInput>;
};

export type RefreshTokenUserUpdateFieldInput = {
  where?: Maybe<RefreshTokenUserConnectionWhere>;
  update?: Maybe<RefreshTokenUserUpdateConnectionInput>;
  connect?: Maybe<RefreshTokenUserConnectFieldInput>;
  disconnect?: Maybe<RefreshTokenUserDisconnectFieldInput>;
  create?: Maybe<RefreshTokenUserCreateFieldInput>;
  delete?: Maybe<RefreshTokenUserDeleteFieldInput>;
};

export type RefreshTokenWhere = {
  OR?: Maybe<Array<RefreshTokenWhere>>;
  AND?: Maybe<Array<RefreshTokenWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  user?: Maybe<UserWhere>;
  user_NOT?: Maybe<UserWhere>;
  userConnection?: Maybe<RefreshTokenUserConnectionWhere>;
  userConnection_NOT?: Maybe<RefreshTokenUserConnectionWhere>;
};

export type Role = {
  __typename?: "Role";
  id: Scalars["ID"];
  type: RoleType;
};

export type RoleCreateInput = {
  type: RoleType;
};

export type RoleOptions = {
  /** Specify one or more RoleSort objects to sort Roles by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<RoleSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

/** Fields to sort Roles by. The order in which sorts are applied is not guaranteed when specifying many fields in one RoleSort object. */
export type RoleSort = {
  id?: Maybe<SortDirection>;
  type?: Maybe<SortDirection>;
};

export enum RoleType {
  Admin = "ADMIN",
}

export type RoleUpdateInput = {
  type?: Maybe<RoleType>;
};

export type RoleWhere = {
  OR?: Maybe<Array<RoleWhere>>;
  AND?: Maybe<Array<RoleWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  type?: Maybe<RoleType>;
  type_NOT?: Maybe<RoleType>;
  type_IN?: Maybe<Array<Maybe<RoleType>>>;
  type_NOT_IN?: Maybe<Array<Maybe<RoleType>>>;
};

export type Service = {
  __typename?: "Service";
  id: Scalars["ID"];
  name: Scalars["String"];
  profilesOfferingService?: Maybe<Array<Maybe<Profile>>>;
  profilesOfferingServiceConnection: ServiceProfilesOfferingServiceConnection;
};

export type ServiceProfilesOfferingServiceArgs = {
  where?: Maybe<ProfileWhere>;
  options?: Maybe<ProfileOptions>;
};

export type ServiceProfilesOfferingServiceConnectionArgs = {
  where?: Maybe<ServiceProfilesOfferingServiceConnectionWhere>;
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  sort?: Maybe<Array<ServiceProfilesOfferingServiceConnectionSort>>;
};

export type ServiceConnectInput = {
  profilesOfferingService?: Maybe<
    Array<ServiceProfilesOfferingServiceConnectFieldInput>
  >;
};

export type ServiceConnectWhere = {
  node: ServiceWhere;
};

export type ServiceCreateInput = {
  name: Scalars["String"];
  profilesOfferingService?: Maybe<ServiceProfilesOfferingServiceFieldInput>;
};

export type ServiceDeleteInput = {
  profilesOfferingService?: Maybe<
    Array<ServiceProfilesOfferingServiceDeleteFieldInput>
  >;
};

export type ServiceDisconnectInput = {
  profilesOfferingService?: Maybe<
    Array<ServiceProfilesOfferingServiceDisconnectFieldInput>
  >;
};

export type ServiceOptions = {
  /** Specify one or more ServiceSort objects to sort Services by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ServiceSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type ServiceProfilesOfferingServiceConnectFieldInput = {
  where?: Maybe<ProfileConnectWhere>;
  connect?: Maybe<Array<ProfileConnectInput>>;
};

export type ServiceProfilesOfferingServiceConnection = {
  __typename?: "ServiceProfilesOfferingServiceConnection";
  edges: Array<ServiceProfilesOfferingServiceRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type ServiceProfilesOfferingServiceConnectionSort = {
  node?: Maybe<ProfileSort>;
};

export type ServiceProfilesOfferingServiceConnectionWhere = {
  AND?: Maybe<Array<ServiceProfilesOfferingServiceConnectionWhere>>;
  OR?: Maybe<Array<ServiceProfilesOfferingServiceConnectionWhere>>;
  node?: Maybe<ProfileWhere>;
  node_NOT?: Maybe<ProfileWhere>;
};

export type ServiceProfilesOfferingServiceCreateFieldInput = {
  node: ProfileCreateInput;
};

export type ServiceProfilesOfferingServiceDeleteFieldInput = {
  where?: Maybe<ServiceProfilesOfferingServiceConnectionWhere>;
  delete?: Maybe<ProfileDeleteInput>;
};

export type ServiceProfilesOfferingServiceDisconnectFieldInput = {
  where?: Maybe<ServiceProfilesOfferingServiceConnectionWhere>;
  disconnect?: Maybe<ProfileDisconnectInput>;
};

export type ServiceProfilesOfferingServiceFieldInput = {
  create?: Maybe<Array<ServiceProfilesOfferingServiceCreateFieldInput>>;
  connect?: Maybe<Array<ServiceProfilesOfferingServiceConnectFieldInput>>;
};

export type ServiceProfilesOfferingServiceRelationship = {
  __typename?: "ServiceProfilesOfferingServiceRelationship";
  cursor: Scalars["String"];
  node: Profile;
};

export type ServiceProfilesOfferingServiceUpdateConnectionInput = {
  node?: Maybe<ProfileUpdateInput>;
};

export type ServiceProfilesOfferingServiceUpdateFieldInput = {
  where?: Maybe<ServiceProfilesOfferingServiceConnectionWhere>;
  update?: Maybe<ServiceProfilesOfferingServiceUpdateConnectionInput>;
  connect?: Maybe<Array<ServiceProfilesOfferingServiceConnectFieldInput>>;
  disconnect?: Maybe<Array<ServiceProfilesOfferingServiceDisconnectFieldInput>>;
  create?: Maybe<Array<ServiceProfilesOfferingServiceCreateFieldInput>>;
  delete?: Maybe<Array<ServiceProfilesOfferingServiceDeleteFieldInput>>;
};

export type ServiceRelationInput = {
  profilesOfferingService?: Maybe<
    Array<ServiceProfilesOfferingServiceCreateFieldInput>
  >;
};

/** Fields to sort Services by. The order in which sorts are applied is not guaranteed when specifying many fields in one ServiceSort object. */
export type ServiceSort = {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
};

export type ServiceUpdateInput = {
  name?: Maybe<Scalars["String"]>;
  profilesOfferingService?: Maybe<
    Array<ServiceProfilesOfferingServiceUpdateFieldInput>
  >;
};

export type ServiceWhere = {
  OR?: Maybe<Array<ServiceWhere>>;
  AND?: Maybe<Array<ServiceWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  profilesOfferingService?: Maybe<ProfileWhere>;
  profilesOfferingService_NOT?: Maybe<ProfileWhere>;
  profilesOfferingServiceConnection?: Maybe<ServiceProfilesOfferingServiceConnectionWhere>;
  profilesOfferingServiceConnection_NOT?: Maybe<ServiceProfilesOfferingServiceConnectionWhere>;
};

export enum SexualOrientation {
  Straight = "STRAIGHT",
  Gay = "GAY",
  Bi = "BI",
  WontSay = "WONT_SAY",
}

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type TimeStamp = {
  timeStamp?: Maybe<Scalars["DateTime"]>;
};

export type TimeStampCreateInput = {
  timeStamp?: Maybe<Scalars["DateTime"]>;
};

export type TimeStampSort = {
  timeStamp?: Maybe<SortDirection>;
};

export type TimeStampUpdateInput = {
  timeStamp?: Maybe<Scalars["DateTime"]>;
};

export type TimeStampWhere = {
  OR?: Maybe<Array<TimeStampWhere>>;
  AND?: Maybe<Array<TimeStampWhere>>;
  timeStamp?: Maybe<Scalars["DateTime"]>;
  timeStamp_NOT?: Maybe<Scalars["DateTime"]>;
  timeStamp_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  timeStamp_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  timeStamp_LT?: Maybe<Scalars["DateTime"]>;
  timeStamp_LTE?: Maybe<Scalars["DateTime"]>;
  timeStamp_GT?: Maybe<Scalars["DateTime"]>;
  timeStamp_GTE?: Maybe<Scalars["DateTime"]>;
};

export type UpdateAuthsMutationResponse = {
  __typename?: "UpdateAuthsMutationResponse";
  auths: Array<Auth>;
};

export type UpdateEthnicitiesMutationResponse = {
  __typename?: "UpdateEthnicitiesMutationResponse";
  ethnicities: Array<Ethnicity>;
};

export type UpdateLocationsMutationResponse = {
  __typename?: "UpdateLocationsMutationResponse";
  locations: Array<Location>;
};

export type UpdateMediaMutationResponse = {
  __typename?: "UpdateMediaMutationResponse";
  media: Array<Media>;
};

export type UpdateProfilesMutationResponse = {
  __typename?: "UpdateProfilesMutationResponse";
  profiles: Array<Profile>;
};

export type UpdateRefreshTokensMutationResponse = {
  __typename?: "UpdateRefreshTokensMutationResponse";
  refreshTokens: Array<RefreshToken>;
};

export type UpdateRolesMutationResponse = {
  __typename?: "UpdateRolesMutationResponse";
  roles: Array<Role>;
};

export type UpdateServicesMutationResponse = {
  __typename?: "UpdateServicesMutationResponse";
  services: Array<Service>;
};

export type UpdateUsersMutationResponse = {
  __typename?: "UpdateUsersMutationResponse";
  users: Array<User>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  name: Scalars["String"];
  email: Scalars["String"];
  transGender?: Maybe<Scalars["Boolean"]>;
  bornWith?: Maybe<BornWith>;
  sexualOrientation?: Maybe<SexualOrientation>;
  ethnicity?: Maybe<Ethnicity>;
  profile?: Maybe<Profile>;
  viewedProfiles?: Maybe<Array<Maybe<Profile>>>;
  viewedMedia?: Maybe<Array<Maybe<Media>>>;
  ethnicityConnection: UserEthnicityConnection;
  profileConnection: UserProfileConnection;
  viewedProfilesConnection: UserViewedProfilesConnection;
  viewedMediaConnection: UserViewedMediaConnection;
};

export type UserEthnicityArgs = {
  where?: Maybe<EthnicityWhere>;
  options?: Maybe<EthnicityOptions>;
};

export type UserProfileArgs = {
  where?: Maybe<ProfileWhere>;
  options?: Maybe<ProfileOptions>;
};

export type UserViewedProfilesArgs = {
  where?: Maybe<ProfileWhere>;
  options?: Maybe<ProfileOptions>;
};

export type UserViewedMediaArgs = {
  where?: Maybe<MediaWhere>;
  options?: Maybe<MediaOptions>;
};

export type UserEthnicityConnectionArgs = {
  where?: Maybe<UserEthnicityConnectionWhere>;
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  sort?: Maybe<Array<UserEthnicityConnectionSort>>;
};

export type UserProfileConnectionArgs = {
  where?: Maybe<UserProfileConnectionWhere>;
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  sort?: Maybe<Array<UserProfileConnectionSort>>;
};

export type UserViewedProfilesConnectionArgs = {
  where?: Maybe<UserViewedProfilesConnectionWhere>;
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  sort?: Maybe<Array<UserViewedProfilesConnectionSort>>;
};

export type UserViewedMediaConnectionArgs = {
  where?: Maybe<UserViewedMediaConnectionWhere>;
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  sort?: Maybe<Array<UserViewedMediaConnectionSort>>;
};

export type UserConnectInput = {
  ethnicity?: Maybe<UserEthnicityConnectFieldInput>;
  profile?: Maybe<UserProfileConnectFieldInput>;
  viewedProfiles?: Maybe<Array<UserViewedProfilesConnectFieldInput>>;
  viewedMedia?: Maybe<Array<UserViewedMediaConnectFieldInput>>;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  name: Scalars["String"];
  email: Scalars["String"];
  transGender?: Maybe<Scalars["Boolean"]>;
  bornWith?: Maybe<BornWith>;
  sexualOrientation?: Maybe<SexualOrientation>;
  ethnicity?: Maybe<UserEthnicityFieldInput>;
  profile?: Maybe<UserProfileFieldInput>;
  viewedProfiles?: Maybe<UserViewedProfilesFieldInput>;
  viewedMedia?: Maybe<UserViewedMediaFieldInput>;
};

export type UserDeleteInput = {
  ethnicity?: Maybe<UserEthnicityDeleteFieldInput>;
  profile?: Maybe<UserProfileDeleteFieldInput>;
  viewedProfiles?: Maybe<Array<UserViewedProfilesDeleteFieldInput>>;
  viewedMedia?: Maybe<Array<UserViewedMediaDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  ethnicity?: Maybe<UserEthnicityDisconnectFieldInput>;
  profile?: Maybe<UserProfileDisconnectFieldInput>;
  viewedProfiles?: Maybe<Array<UserViewedProfilesDisconnectFieldInput>>;
  viewedMedia?: Maybe<Array<UserViewedMediaDisconnectFieldInput>>;
};

export type UserEthnicityConnectFieldInput = {
  where?: Maybe<EthnicityConnectWhere>;
};

export type UserEthnicityConnection = {
  __typename?: "UserEthnicityConnection";
  edges: Array<UserEthnicityRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserEthnicityConnectionSort = {
  node?: Maybe<EthnicitySort>;
};

export type UserEthnicityConnectionWhere = {
  AND?: Maybe<Array<UserEthnicityConnectionWhere>>;
  OR?: Maybe<Array<UserEthnicityConnectionWhere>>;
  node?: Maybe<EthnicityWhere>;
  node_NOT?: Maybe<EthnicityWhere>;
};

export type UserEthnicityCreateFieldInput = {
  node: EthnicityCreateInput;
};

export type UserEthnicityDeleteFieldInput = {
  where?: Maybe<UserEthnicityConnectionWhere>;
};

export type UserEthnicityDisconnectFieldInput = {
  where?: Maybe<UserEthnicityConnectionWhere>;
};

export type UserEthnicityFieldInput = {
  create?: Maybe<UserEthnicityCreateFieldInput>;
  connect?: Maybe<UserEthnicityConnectFieldInput>;
};

export type UserEthnicityRelationship = {
  __typename?: "UserEthnicityRelationship";
  cursor: Scalars["String"];
  node: Ethnicity;
};

export type UserEthnicityUpdateConnectionInput = {
  node?: Maybe<EthnicityUpdateInput>;
};

export type UserEthnicityUpdateFieldInput = {
  where?: Maybe<UserEthnicityConnectionWhere>;
  update?: Maybe<UserEthnicityUpdateConnectionInput>;
  connect?: Maybe<UserEthnicityConnectFieldInput>;
  disconnect?: Maybe<UserEthnicityDisconnectFieldInput>;
  create?: Maybe<UserEthnicityCreateFieldInput>;
  delete?: Maybe<UserEthnicityDeleteFieldInput>;
};

export type UserOptions = {
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<UserSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type UserProfileConnectFieldInput = {
  where?: Maybe<ProfileConnectWhere>;
  connect?: Maybe<ProfileConnectInput>;
};

export type UserProfileConnection = {
  __typename?: "UserProfileConnection";
  edges: Array<UserProfileRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserProfileConnectionSort = {
  node?: Maybe<ProfileSort>;
};

export type UserProfileConnectionWhere = {
  AND?: Maybe<Array<UserProfileConnectionWhere>>;
  OR?: Maybe<Array<UserProfileConnectionWhere>>;
  node?: Maybe<ProfileWhere>;
  node_NOT?: Maybe<ProfileWhere>;
};

export type UserProfileCreateFieldInput = {
  node: ProfileCreateInput;
};

export type UserProfileDeleteFieldInput = {
  where?: Maybe<UserProfileConnectionWhere>;
  delete?: Maybe<ProfileDeleteInput>;
};

export type UserProfileDisconnectFieldInput = {
  where?: Maybe<UserProfileConnectionWhere>;
  disconnect?: Maybe<ProfileDisconnectInput>;
};

export type UserProfileFieldInput = {
  create?: Maybe<UserProfileCreateFieldInput>;
  connect?: Maybe<UserProfileConnectFieldInput>;
};

export type UserProfileRelationship = {
  __typename?: "UserProfileRelationship";
  cursor: Scalars["String"];
  node: Profile;
};

export type UserProfileUpdateConnectionInput = {
  node?: Maybe<ProfileUpdateInput>;
};

export type UserProfileUpdateFieldInput = {
  where?: Maybe<UserProfileConnectionWhere>;
  update?: Maybe<UserProfileUpdateConnectionInput>;
  connect?: Maybe<UserProfileConnectFieldInput>;
  disconnect?: Maybe<UserProfileDisconnectFieldInput>;
  create?: Maybe<UserProfileCreateFieldInput>;
  delete?: Maybe<UserProfileDeleteFieldInput>;
};

export type UserRelationInput = {
  ethnicity?: Maybe<UserEthnicityCreateFieldInput>;
  profile?: Maybe<UserProfileCreateFieldInput>;
  viewedProfiles?: Maybe<Array<UserViewedProfilesCreateFieldInput>>;
  viewedMedia?: Maybe<Array<UserViewedMediaCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  email?: Maybe<SortDirection>;
  transGender?: Maybe<SortDirection>;
  bornWith?: Maybe<SortDirection>;
  sexualOrientation?: Maybe<SortDirection>;
};

export type UserUpdateInput = {
  name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  transGender?: Maybe<Scalars["Boolean"]>;
  bornWith?: Maybe<BornWith>;
  sexualOrientation?: Maybe<SexualOrientation>;
  ethnicity?: Maybe<UserEthnicityUpdateFieldInput>;
  profile?: Maybe<UserProfileUpdateFieldInput>;
  viewedProfiles?: Maybe<Array<UserViewedProfilesUpdateFieldInput>>;
  viewedMedia?: Maybe<Array<UserViewedMediaUpdateFieldInput>>;
};

export type UserViewedMediaConnectFieldInput = {
  where?: Maybe<MediaConnectWhere>;
  connect?: Maybe<Array<MediaConnectInput>>;
};

export type UserViewedMediaConnection = {
  __typename?: "UserViewedMediaConnection";
  edges: Array<UserViewedMediaRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserViewedMediaConnectionSort = {
  node?: Maybe<MediaSort>;
};

export type UserViewedMediaConnectionWhere = {
  AND?: Maybe<Array<UserViewedMediaConnectionWhere>>;
  OR?: Maybe<Array<UserViewedMediaConnectionWhere>>;
  node?: Maybe<MediaWhere>;
  node_NOT?: Maybe<MediaWhere>;
};

export type UserViewedMediaCreateFieldInput = {
  node: MediaCreateInput;
};

export type UserViewedMediaDeleteFieldInput = {
  where?: Maybe<UserViewedMediaConnectionWhere>;
  delete?: Maybe<MediaDeleteInput>;
};

export type UserViewedMediaDisconnectFieldInput = {
  where?: Maybe<UserViewedMediaConnectionWhere>;
  disconnect?: Maybe<MediaDisconnectInput>;
};

export type UserViewedMediaFieldInput = {
  create?: Maybe<Array<UserViewedMediaCreateFieldInput>>;
  connect?: Maybe<Array<UserViewedMediaConnectFieldInput>>;
};

export type UserViewedMediaRelationship = {
  __typename?: "UserViewedMediaRelationship";
  cursor: Scalars["String"];
  node: Media;
};

export type UserViewedMediaUpdateConnectionInput = {
  node?: Maybe<MediaUpdateInput>;
};

export type UserViewedMediaUpdateFieldInput = {
  where?: Maybe<UserViewedMediaConnectionWhere>;
  update?: Maybe<UserViewedMediaUpdateConnectionInput>;
  connect?: Maybe<Array<UserViewedMediaConnectFieldInput>>;
  disconnect?: Maybe<Array<UserViewedMediaDisconnectFieldInput>>;
  create?: Maybe<Array<UserViewedMediaCreateFieldInput>>;
  delete?: Maybe<Array<UserViewedMediaDeleteFieldInput>>;
};

export type UserViewedProfilesConnectFieldInput = {
  where?: Maybe<ProfileConnectWhere>;
  connect?: Maybe<Array<ProfileConnectInput>>;
  edge?: Maybe<TimeStampCreateInput>;
};

export type UserViewedProfilesConnection = {
  __typename?: "UserViewedProfilesConnection";
  edges: Array<UserViewedProfilesRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserViewedProfilesConnectionSort = {
  node?: Maybe<ProfileSort>;
  edge?: Maybe<TimeStampSort>;
};

export type UserViewedProfilesConnectionWhere = {
  AND?: Maybe<Array<UserViewedProfilesConnectionWhere>>;
  OR?: Maybe<Array<UserViewedProfilesConnectionWhere>>;
  edge?: Maybe<TimeStampWhere>;
  edge_NOT?: Maybe<TimeStampWhere>;
  node?: Maybe<ProfileWhere>;
  node_NOT?: Maybe<ProfileWhere>;
};

export type UserViewedProfilesCreateFieldInput = {
  node: ProfileCreateInput;
  edge?: Maybe<TimeStampCreateInput>;
};

export type UserViewedProfilesDeleteFieldInput = {
  where?: Maybe<UserViewedProfilesConnectionWhere>;
  delete?: Maybe<ProfileDeleteInput>;
};

export type UserViewedProfilesDisconnectFieldInput = {
  where?: Maybe<UserViewedProfilesConnectionWhere>;
  disconnect?: Maybe<ProfileDisconnectInput>;
};

export type UserViewedProfilesFieldInput = {
  create?: Maybe<Array<UserViewedProfilesCreateFieldInput>>;
  connect?: Maybe<Array<UserViewedProfilesConnectFieldInput>>;
};

export type UserViewedProfilesRelationship = TimeStamp & {
  __typename?: "UserViewedProfilesRelationship";
  cursor: Scalars["String"];
  node: Profile;
  timeStamp?: Maybe<Scalars["DateTime"]>;
};

export type UserViewedProfilesUpdateConnectionInput = {
  node?: Maybe<ProfileUpdateInput>;
  edge?: Maybe<TimeStampUpdateInput>;
};

export type UserViewedProfilesUpdateFieldInput = {
  where?: Maybe<UserViewedProfilesConnectionWhere>;
  update?: Maybe<UserViewedProfilesUpdateConnectionInput>;
  connect?: Maybe<Array<UserViewedProfilesConnectFieldInput>>;
  disconnect?: Maybe<Array<UserViewedProfilesDisconnectFieldInput>>;
  create?: Maybe<Array<UserViewedProfilesCreateFieldInput>>;
  delete?: Maybe<Array<UserViewedProfilesDeleteFieldInput>>;
};

export type UserWhere = {
  OR?: Maybe<Array<UserWhere>>;
  AND?: Maybe<Array<UserWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  email_NOT?: Maybe<Scalars["String"]>;
  email_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  email_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  email_CONTAINS?: Maybe<Scalars["String"]>;
  email_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  email_STARTS_WITH?: Maybe<Scalars["String"]>;
  email_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  email_ENDS_WITH?: Maybe<Scalars["String"]>;
  email_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  transGender?: Maybe<Scalars["Boolean"]>;
  transGender_NOT?: Maybe<Scalars["Boolean"]>;
  bornWith?: Maybe<BornWith>;
  bornWith_NOT?: Maybe<BornWith>;
  bornWith_IN?: Maybe<Array<Maybe<BornWith>>>;
  bornWith_NOT_IN?: Maybe<Array<Maybe<BornWith>>>;
  sexualOrientation?: Maybe<SexualOrientation>;
  sexualOrientation_NOT?: Maybe<SexualOrientation>;
  sexualOrientation_IN?: Maybe<Array<Maybe<SexualOrientation>>>;
  sexualOrientation_NOT_IN?: Maybe<Array<Maybe<SexualOrientation>>>;
  ethnicity?: Maybe<EthnicityWhere>;
  ethnicity_NOT?: Maybe<EthnicityWhere>;
  profile?: Maybe<ProfileWhere>;
  profile_NOT?: Maybe<ProfileWhere>;
  viewedProfiles?: Maybe<ProfileWhere>;
  viewedProfiles_NOT?: Maybe<ProfileWhere>;
  viewedMedia?: Maybe<MediaWhere>;
  viewedMedia_NOT?: Maybe<MediaWhere>;
  ethnicityConnection?: Maybe<UserEthnicityConnectionWhere>;
  ethnicityConnection_NOT?: Maybe<UserEthnicityConnectionWhere>;
  profileConnection?: Maybe<UserProfileConnectionWhere>;
  profileConnection_NOT?: Maybe<UserProfileConnectionWhere>;
  viewedProfilesConnection?: Maybe<UserViewedProfilesConnectionWhere>;
  viewedProfilesConnection_NOT?: Maybe<UserViewedProfilesConnectionWhere>;
  viewedMediaConnection?: Maybe<UserViewedMediaConnectionWhere>;
  viewedMediaConnection_NOT?: Maybe<UserViewedMediaConnectionWhere>;
};
