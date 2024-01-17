import { GraphQLClient } from "graphql-request";
import { GraphQLClientRequestHeaders } from "graphql-request/build/cjs/types";
import gql from "graphql-tag";
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  JSON: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type BooleanFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Boolean"]["input"]>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Boolean"]["input"]>>>;
  readonly contains: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly containsi: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly endsWith: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly eq: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly eqi: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly gt: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly gte: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Boolean"]["input"]>>>;
  readonly lt: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly lte: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly ne: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly nei: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly not: InputMaybe<BooleanFilterInput>;
  readonly notContains: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly notContainsi: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Boolean"]["input"]>>>;
  readonly notNull: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly null: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Boolean"]["input"]>>>;
  readonly startsWith: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Brand = {
  readonly __typename?: "Brand";
  readonly createdAt: Maybe<Scalars["DateTime"]["output"]>;
  readonly models: Maybe<ReadonlyArray<Maybe<ComponentCommonModel>>>;
  readonly publishedAt: Maybe<Scalars["DateTime"]["output"]>;
  readonly title: Maybe<Scalars["String"]["output"]>;
  readonly updatedAt: Maybe<Scalars["DateTime"]["output"]>;
};

export type BrandModelsArgs = {
  filters: InputMaybe<ComponentCommonModelFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BrandEntity = {
  readonly __typename?: "BrandEntity";
  readonly attributes: Maybe<Brand>;
  readonly id: Maybe<Scalars["ID"]["output"]>;
};

export type BrandEntityResponse = {
  readonly __typename?: "BrandEntityResponse";
  readonly data: Maybe<BrandEntity>;
};

export type BrandEntityResponseCollection = {
  readonly __typename?: "BrandEntityResponseCollection";
  readonly data: ReadonlyArray<BrandEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type BrandFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<BrandFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly models: InputMaybe<ComponentCommonModelFiltersInput>;
  readonly not: InputMaybe<BrandFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<BrandFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type BrandInput = {
  readonly models: InputMaybe<ReadonlyArray<InputMaybe<ComponentCommonModelInput>>>;
  readonly publishedAt: InputMaybe<Scalars["DateTime"]["input"]>;
  readonly title: InputMaybe<Scalars["String"]["input"]>;
};

export type Category = {
  readonly __typename?: "Category";
  readonly createdAt: Maybe<Scalars["DateTime"]["output"]>;
  readonly publishedAt: Maybe<Scalars["DateTime"]["output"]>;
  readonly title: Maybe<Scalars["String"]["output"]>;
  readonly updatedAt: Maybe<Scalars["DateTime"]["output"]>;
};

export type CategoryEntity = {
  readonly __typename?: "CategoryEntity";
  readonly attributes: Maybe<Category>;
  readonly id: Maybe<Scalars["ID"]["output"]>;
};

export type CategoryEntityResponse = {
  readonly __typename?: "CategoryEntityResponse";
  readonly data: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  readonly __typename?: "CategoryEntityResponseCollection";
  readonly data: ReadonlyArray<CategoryEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<CategoryFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<CategoryFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<CategoryFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  readonly publishedAt: InputMaybe<Scalars["DateTime"]["input"]>;
  readonly title: InputMaybe<Scalars["String"]["input"]>;
};

export type ComponentCommonModel = {
  readonly __typename?: "ComponentCommonModel";
  readonly id: Scalars["ID"]["output"];
  readonly title: Scalars["String"]["output"];
};

export type ComponentCommonModelFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentCommonModelFiltersInput>>>;
  readonly not: InputMaybe<ComponentCommonModelFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentCommonModelFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentCommonModelInput = {
  readonly id: InputMaybe<Scalars["ID"]["input"]>;
  readonly title: InputMaybe<Scalars["String"]["input"]>;
};

export type ComponentCommonReview = {
  readonly __typename?: "ComponentCommonReview";
  readonly id: Scalars["ID"]["output"];
  readonly rating: Scalars["Int"]["output"];
  readonly reviewText: Maybe<Scalars["String"]["output"]>;
  readonly users_permissions_user: Maybe<UsersPermissionsUserEntityResponse>;
};

export type ComponentUiLink = {
  readonly __typename?: "ComponentUiLink";
  readonly href: Scalars["String"]["output"];
  readonly id: Scalars["ID"]["output"];
  readonly label: Scalars["String"]["output"];
};

export type ComponentUiLinkFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkFiltersInput>>>;
  readonly href: InputMaybe<StringFilterInput>;
  readonly label: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiLinkFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkFiltersInput>>>;
};

export type ComponentUiLinkInput = {
  readonly href: InputMaybe<Scalars["String"]["input"]>;
  readonly id: InputMaybe<Scalars["ID"]["input"]>;
  readonly label: InputMaybe<Scalars["String"]["input"]>;
};

export type DateTimeFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars["DateTime"]["input"]>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars["DateTime"]["input"]>>>;
  readonly contains: InputMaybe<Scalars["DateTime"]["input"]>;
  readonly containsi: InputMaybe<Scalars["DateTime"]["input"]>;
  readonly endsWith: InputMaybe<Scalars["DateTime"]["input"]>;
  readonly eq: InputMaybe<Scalars["DateTime"]["input"]>;
  readonly eqi: InputMaybe<Scalars["DateTime"]["input"]>;
  readonly gt: InputMaybe<Scalars["DateTime"]["input"]>;
  readonly gte: InputMaybe<Scalars["DateTime"]["input"]>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars["DateTime"]["input"]>>>;
  readonly lt: InputMaybe<Scalars["DateTime"]["input"]>;
  readonly lte: InputMaybe<Scalars["DateTime"]["input"]>;
  readonly ne: InputMaybe<Scalars["DateTime"]["input"]>;
  readonly nei: InputMaybe<Scalars["DateTime"]["input"]>;
  readonly not: InputMaybe<DateTimeFilterInput>;
  readonly notContains: InputMaybe<Scalars["DateTime"]["input"]>;
  readonly notContainsi: InputMaybe<Scalars["DateTime"]["input"]>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars["DateTime"]["input"]>>>;
  readonly notNull: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly null: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars["DateTime"]["input"]>>>;
  readonly startsWith: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type FileInfoInput = {
  readonly alternativeText: InputMaybe<Scalars["String"]["input"]>;
  readonly caption: InputMaybe<Scalars["String"]["input"]>;
  readonly name: InputMaybe<Scalars["String"]["input"]>;
};

export type FloatFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Float"]["input"]>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Float"]["input"]>>>;
  readonly contains: InputMaybe<Scalars["Float"]["input"]>;
  readonly containsi: InputMaybe<Scalars["Float"]["input"]>;
  readonly endsWith: InputMaybe<Scalars["Float"]["input"]>;
  readonly eq: InputMaybe<Scalars["Float"]["input"]>;
  readonly eqi: InputMaybe<Scalars["Float"]["input"]>;
  readonly gt: InputMaybe<Scalars["Float"]["input"]>;
  readonly gte: InputMaybe<Scalars["Float"]["input"]>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Float"]["input"]>>>;
  readonly lt: InputMaybe<Scalars["Float"]["input"]>;
  readonly lte: InputMaybe<Scalars["Float"]["input"]>;
  readonly ne: InputMaybe<Scalars["Float"]["input"]>;
  readonly nei: InputMaybe<Scalars["Float"]["input"]>;
  readonly not: InputMaybe<FloatFilterInput>;
  readonly notContains: InputMaybe<Scalars["Float"]["input"]>;
  readonly notContainsi: InputMaybe<Scalars["Float"]["input"]>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Float"]["input"]>>>;
  readonly notNull: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly null: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Float"]["input"]>>>;
  readonly startsWith: InputMaybe<Scalars["Float"]["input"]>;
};

export type GenericMorph =
  | Brand
  | Category
  | ComponentCommonModel
  | ComponentCommonReview
  | ComponentUiLink
  | I18NLocale
  | Model
  | NavLink
  | Product
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser;

export type I18NLocale = {
  readonly __typename?: "I18NLocale";
  readonly code: Maybe<Scalars["String"]["output"]>;
  readonly createdAt: Maybe<Scalars["DateTime"]["output"]>;
  readonly name: Maybe<Scalars["String"]["output"]>;
  readonly updatedAt: Maybe<Scalars["DateTime"]["output"]>;
};

export type I18NLocaleEntity = {
  readonly __typename?: "I18NLocaleEntity";
  readonly attributes: Maybe<I18NLocale>;
  readonly id: Maybe<Scalars["ID"]["output"]>;
};

export type I18NLocaleEntityResponse = {
  readonly __typename?: "I18NLocaleEntityResponse";
  readonly data: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  readonly __typename?: "I18NLocaleEntityResponseCollection";
  readonly data: ReadonlyArray<I18NLocaleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly code: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<I18NLocaleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars["ID"]["input"]>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars["ID"]["input"]>>>;
  readonly contains: InputMaybe<Scalars["ID"]["input"]>;
  readonly containsi: InputMaybe<Scalars["ID"]["input"]>;
  readonly endsWith: InputMaybe<Scalars["ID"]["input"]>;
  readonly eq: InputMaybe<Scalars["ID"]["input"]>;
  readonly eqi: InputMaybe<Scalars["ID"]["input"]>;
  readonly gt: InputMaybe<Scalars["ID"]["input"]>;
  readonly gte: InputMaybe<Scalars["ID"]["input"]>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars["ID"]["input"]>>>;
  readonly lt: InputMaybe<Scalars["ID"]["input"]>;
  readonly lte: InputMaybe<Scalars["ID"]["input"]>;
  readonly ne: InputMaybe<Scalars["ID"]["input"]>;
  readonly nei: InputMaybe<Scalars["ID"]["input"]>;
  readonly not: InputMaybe<IdFilterInput>;
  readonly notContains: InputMaybe<Scalars["ID"]["input"]>;
  readonly notContainsi: InputMaybe<Scalars["ID"]["input"]>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars["ID"]["input"]>>>;
  readonly notNull: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly null: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars["ID"]["input"]>>>;
  readonly startsWith: InputMaybe<Scalars["ID"]["input"]>;
};

export type IntFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]["input"]>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]["input"]>>>;
  readonly contains: InputMaybe<Scalars["Int"]["input"]>;
  readonly containsi: InputMaybe<Scalars["Int"]["input"]>;
  readonly endsWith: InputMaybe<Scalars["Int"]["input"]>;
  readonly eq: InputMaybe<Scalars["Int"]["input"]>;
  readonly eqi: InputMaybe<Scalars["Int"]["input"]>;
  readonly gt: InputMaybe<Scalars["Int"]["input"]>;
  readonly gte: InputMaybe<Scalars["Int"]["input"]>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]["input"]>>>;
  readonly lt: InputMaybe<Scalars["Int"]["input"]>;
  readonly lte: InputMaybe<Scalars["Int"]["input"]>;
  readonly ne: InputMaybe<Scalars["Int"]["input"]>;
  readonly nei: InputMaybe<Scalars["Int"]["input"]>;
  readonly not: InputMaybe<IntFilterInput>;
  readonly notContains: InputMaybe<Scalars["Int"]["input"]>;
  readonly notContainsi: InputMaybe<Scalars["Int"]["input"]>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]["input"]>>>;
  readonly notNull: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly null: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]["input"]>>>;
  readonly startsWith: InputMaybe<Scalars["Int"]["input"]>;
};

export type JsonFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars["JSON"]["input"]>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars["JSON"]["input"]>>>;
  readonly contains: InputMaybe<Scalars["JSON"]["input"]>;
  readonly containsi: InputMaybe<Scalars["JSON"]["input"]>;
  readonly endsWith: InputMaybe<Scalars["JSON"]["input"]>;
  readonly eq: InputMaybe<Scalars["JSON"]["input"]>;
  readonly eqi: InputMaybe<Scalars["JSON"]["input"]>;
  readonly gt: InputMaybe<Scalars["JSON"]["input"]>;
  readonly gte: InputMaybe<Scalars["JSON"]["input"]>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars["JSON"]["input"]>>>;
  readonly lt: InputMaybe<Scalars["JSON"]["input"]>;
  readonly lte: InputMaybe<Scalars["JSON"]["input"]>;
  readonly ne: InputMaybe<Scalars["JSON"]["input"]>;
  readonly nei: InputMaybe<Scalars["JSON"]["input"]>;
  readonly not: InputMaybe<JsonFilterInput>;
  readonly notContains: InputMaybe<Scalars["JSON"]["input"]>;
  readonly notContainsi: InputMaybe<Scalars["JSON"]["input"]>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars["JSON"]["input"]>>>;
  readonly notNull: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly null: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars["JSON"]["input"]>>>;
  readonly startsWith: InputMaybe<Scalars["JSON"]["input"]>;
};

export type Model = {
  readonly __typename?: "Model";
  readonly brand: Maybe<BrandEntityResponse>;
  readonly createdAt: Maybe<Scalars["DateTime"]["output"]>;
  readonly publishedAt: Maybe<Scalars["DateTime"]["output"]>;
  readonly title: Scalars["String"]["output"];
  readonly updatedAt: Maybe<Scalars["DateTime"]["output"]>;
};

export type ModelEntity = {
  readonly __typename?: "ModelEntity";
  readonly attributes: Maybe<Model>;
  readonly id: Maybe<Scalars["ID"]["output"]>;
};

export type ModelEntityResponse = {
  readonly __typename?: "ModelEntityResponse";
  readonly data: Maybe<ModelEntity>;
};

export type ModelEntityResponseCollection = {
  readonly __typename?: "ModelEntityResponseCollection";
  readonly data: ReadonlyArray<ModelEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type ModelFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ModelFiltersInput>>>;
  readonly brand: InputMaybe<BrandFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<ModelFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ModelFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ModelInput = {
  readonly brand: InputMaybe<Scalars["ID"]["input"]>;
  readonly publishedAt: InputMaybe<Scalars["DateTime"]["input"]>;
  readonly title: InputMaybe<Scalars["String"]["input"]>;
};

export type Mutation = {
  readonly __typename?: "Mutation";
  /** Change user password. Confirm with the current password. */
  readonly changePassword: Maybe<UsersPermissionsLoginPayload>;
  readonly createBrand: Maybe<BrandEntityResponse>;
  readonly createCategory: Maybe<CategoryEntityResponse>;
  readonly createModel: Maybe<ModelEntityResponse>;
  readonly createNavLink: Maybe<NavLinkEntityResponse>;
  readonly createProduct: Maybe<ProductEntityResponse>;
  readonly createUploadFile: Maybe<UploadFileEntityResponse>;
  readonly createUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  readonly createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  readonly createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly deleteBrand: Maybe<BrandEntityResponse>;
  readonly deleteCategory: Maybe<CategoryEntityResponse>;
  readonly deleteModel: Maybe<ModelEntityResponse>;
  readonly deleteNavLink: Maybe<NavLinkEntityResponse>;
  readonly deleteProduct: Maybe<ProductEntityResponse>;
  readonly deleteUploadFile: Maybe<UploadFileEntityResponse>;
  readonly deleteUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  readonly deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  readonly deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  readonly emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  readonly forgotPassword: Maybe<UsersPermissionsPasswordPayload>;
  readonly login: UsersPermissionsLoginPayload;
  readonly multipleUpload: ReadonlyArray<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  readonly register: UsersPermissionsLoginPayload;
  readonly removeFile: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  readonly resetPassword: Maybe<UsersPermissionsLoginPayload>;
  readonly updateBrand: Maybe<BrandEntityResponse>;
  readonly updateCategory: Maybe<CategoryEntityResponse>;
  readonly updateFileInfo: UploadFileEntityResponse;
  readonly updateModel: Maybe<ModelEntityResponse>;
  readonly updateNavLink: Maybe<NavLinkEntityResponse>;
  readonly updateProduct: Maybe<ProductEntityResponse>;
  readonly updateUploadFile: Maybe<UploadFileEntityResponse>;
  readonly updateUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  readonly updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  readonly updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly upload: UploadFileEntityResponse;
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  passwordConfirmation: Scalars["String"]["input"];
};

export type MutationCreateBrandArgs = {
  data: BrandInput;
};

export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};

export type MutationCreateModelArgs = {
  data: ModelInput;
};

export type MutationCreateNavLinkArgs = {
  data: NavLinkInput;
};

export type MutationCreateProductArgs = {
  data: ProductInput;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationDeleteBrandArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteCategoryArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteModelArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteNavLinkArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteProductArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteUploadFolderArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"]["input"];
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"]["input"];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field: InputMaybe<Scalars["String"]["input"]>;
  files: ReadonlyArray<InputMaybe<Scalars["Upload"]["input"]>>;
  ref: InputMaybe<Scalars["String"]["input"]>;
  refId: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationResetPasswordArgs = {
  code: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  passwordConfirmation: Scalars["String"]["input"];
};

export type MutationUpdateBrandArgs = {
  data: BrandInput;
  id: Scalars["ID"]["input"];
};

export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars["ID"]["input"];
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"]["input"];
  info: InputMaybe<FileInfoInput>;
};

export type MutationUpdateModelArgs = {
  data: ModelInput;
  id: Scalars["ID"]["input"];
};

export type MutationUpdateNavLinkArgs = {
  data: NavLinkInput;
  id: Scalars["ID"]["input"];
};

export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars["ID"]["input"];
};

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars["ID"]["input"];
};

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars["ID"]["input"];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars["ID"]["input"];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars["ID"]["input"];
};

export type MutationUploadArgs = {
  field: InputMaybe<Scalars["String"]["input"]>;
  file: Scalars["Upload"]["input"];
  info: InputMaybe<FileInfoInput>;
  ref: InputMaybe<Scalars["String"]["input"]>;
  refId: InputMaybe<Scalars["ID"]["input"]>;
};

export type NavLink = {
  readonly __typename?: "NavLink";
  readonly createdAt: Maybe<Scalars["DateTime"]["output"]>;
  readonly navLinks: ReadonlyArray<Maybe<ComponentUiLink>>;
  readonly publishedAt: Maybe<Scalars["DateTime"]["output"]>;
  readonly updatedAt: Maybe<Scalars["DateTime"]["output"]>;
};

export type NavLinkNavLinksArgs = {
  filters: InputMaybe<ComponentUiLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type NavLinkEntity = {
  readonly __typename?: "NavLinkEntity";
  readonly attributes: Maybe<NavLink>;
  readonly id: Maybe<Scalars["ID"]["output"]>;
};

export type NavLinkEntityResponse = {
  readonly __typename?: "NavLinkEntityResponse";
  readonly data: Maybe<NavLinkEntity>;
};

export type NavLinkEntityResponseCollection = {
  readonly __typename?: "NavLinkEntityResponseCollection";
  readonly data: ReadonlyArray<NavLinkEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type NavLinkFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<NavLinkFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly navLinks: InputMaybe<ComponentUiLinkFiltersInput>;
  readonly not: InputMaybe<NavLinkFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<NavLinkFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type NavLinkInput = {
  readonly navLinks: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkInput>>>;
  readonly publishedAt: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Pagination = {
  readonly __typename?: "Pagination";
  readonly page: Scalars["Int"]["output"];
  readonly pageCount: Scalars["Int"]["output"];
  readonly pageSize: Scalars["Int"]["output"];
  readonly total: Scalars["Int"]["output"];
};

export type PaginationArg = {
  readonly limit: InputMaybe<Scalars["Int"]["input"]>;
  readonly page: InputMaybe<Scalars["Int"]["input"]>;
  readonly pageSize: InputMaybe<Scalars["Int"]["input"]>;
  readonly start: InputMaybe<Scalars["Int"]["input"]>;
};

export type Product = {
  readonly __typename?: "Product";
  readonly brand: Maybe<BrandEntityResponse>;
  readonly category: Maybe<CategoryEntityResponse>;
  readonly createdAt: Maybe<Scalars["DateTime"]["output"]>;
  readonly description: Maybe<Scalars["String"]["output"]>;
  readonly discountPrice: Maybe<Scalars["Float"]["output"]>;
  readonly name: Scalars["String"]["output"];
  readonly price: Scalars["Float"]["output"];
  readonly productPreviewImg: UploadFileEntityResponse;
  readonly publishedAt: Maybe<Scalars["DateTime"]["output"]>;
  readonly shortName: Scalars["String"]["output"];
  readonly slug: Scalars["String"]["output"];
  readonly stock: Scalars["Int"]["output"];
  readonly updatedAt: Maybe<Scalars["DateTime"]["output"]>;
};

export type ProductEntity = {
  readonly __typename?: "ProductEntity";
  readonly attributes: Maybe<Product>;
  readonly id: Maybe<Scalars["ID"]["output"]>;
};

export type ProductEntityResponse = {
  readonly __typename?: "ProductEntityResponse";
  readonly data: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  readonly __typename?: "ProductEntityResponseCollection";
  readonly data: ReadonlyArray<ProductEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ProductFiltersInput>>>;
  readonly brand: InputMaybe<BrandFiltersInput>;
  readonly category: InputMaybe<CategoryFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly discountPrice: InputMaybe<FloatFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ProductFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ProductFiltersInput>>>;
  readonly price: InputMaybe<FloatFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly shortName: InputMaybe<StringFilterInput>;
  readonly slug: InputMaybe<StringFilterInput>;
  readonly stock: InputMaybe<IntFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ProductInput = {
  readonly brand: InputMaybe<Scalars["ID"]["input"]>;
  readonly category: InputMaybe<Scalars["ID"]["input"]>;
  readonly description: InputMaybe<Scalars["String"]["input"]>;
  readonly discountPrice: InputMaybe<Scalars["Float"]["input"]>;
  readonly name: InputMaybe<Scalars["String"]["input"]>;
  readonly price: InputMaybe<Scalars["Float"]["input"]>;
  readonly productPreviewImg: InputMaybe<Scalars["ID"]["input"]>;
  readonly publishedAt: InputMaybe<Scalars["DateTime"]["input"]>;
  readonly shortName: InputMaybe<Scalars["String"]["input"]>;
  readonly slug: InputMaybe<Scalars["String"]["input"]>;
  readonly stock: InputMaybe<Scalars["Int"]["input"]>;
};

export enum PublicationState {
  Live = "LIVE",
  Preview = "PREVIEW"
}

export type Query = {
  readonly __typename?: "Query";
  readonly brand: Maybe<BrandEntityResponse>;
  readonly brands: Maybe<BrandEntityResponseCollection>;
  readonly categories: Maybe<CategoryEntityResponseCollection>;
  readonly category: Maybe<CategoryEntityResponse>;
  readonly i18NLocale: Maybe<I18NLocaleEntityResponse>;
  readonly i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
  readonly me: Maybe<UsersPermissionsMe>;
  readonly model: Maybe<ModelEntityResponse>;
  readonly models: Maybe<ModelEntityResponseCollection>;
  readonly navLink: Maybe<NavLinkEntityResponse>;
  readonly navLinks: Maybe<NavLinkEntityResponseCollection>;
  readonly product: Maybe<ProductEntityResponse>;
  readonly products: Maybe<ProductEntityResponseCollection>;
  readonly uploadFile: Maybe<UploadFileEntityResponse>;
  readonly uploadFiles: Maybe<UploadFileEntityResponseCollection>;
  readonly uploadFolder: Maybe<UploadFolderEntityResponse>;
  readonly uploadFolders: Maybe<UploadFolderEntityResponseCollection>;
  readonly usersPermissionsRole: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly usersPermissionsRoles: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  readonly usersPermissionsUser: Maybe<UsersPermissionsUserEntityResponse>;
  readonly usersPermissionsUsers: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryBrandArgs = {
  id: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryBrandsArgs = {
  filters: InputMaybe<BrandFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryCategoriesArgs = {
  filters: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryCategoryArgs = {
  id: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryI18NLocaleArgs = {
  id: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryModelArgs = {
  id: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryModelsArgs = {
  filters: InputMaybe<ModelFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryNavLinkArgs = {
  id: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryNavLinksArgs = {
  filters: InputMaybe<NavLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryProductArgs = {
  id: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryProductsArgs = {
  filters: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryUploadFileArgs = {
  id: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryUploadFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryUploadFolderArgs = {
  id: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryUploadFoldersArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ResponseCollectionMeta = {
  readonly __typename?: "ResponseCollectionMeta";
  readonly pagination: Pagination;
};

export type StringFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
  readonly contains: InputMaybe<Scalars["String"]["input"]>;
  readonly containsi: InputMaybe<Scalars["String"]["input"]>;
  readonly endsWith: InputMaybe<Scalars["String"]["input"]>;
  readonly eq: InputMaybe<Scalars["String"]["input"]>;
  readonly eqi: InputMaybe<Scalars["String"]["input"]>;
  readonly gt: InputMaybe<Scalars["String"]["input"]>;
  readonly gte: InputMaybe<Scalars["String"]["input"]>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
  readonly lt: InputMaybe<Scalars["String"]["input"]>;
  readonly lte: InputMaybe<Scalars["String"]["input"]>;
  readonly ne: InputMaybe<Scalars["String"]["input"]>;
  readonly nei: InputMaybe<Scalars["String"]["input"]>;
  readonly not: InputMaybe<StringFilterInput>;
  readonly notContains: InputMaybe<Scalars["String"]["input"]>;
  readonly notContainsi: InputMaybe<Scalars["String"]["input"]>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
  readonly notNull: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly null: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
  readonly startsWith: InputMaybe<Scalars["String"]["input"]>;
};

export type UploadFile = {
  readonly __typename?: "UploadFile";
  readonly alternativeText: Maybe<Scalars["String"]["output"]>;
  readonly caption: Maybe<Scalars["String"]["output"]>;
  readonly createdAt: Maybe<Scalars["DateTime"]["output"]>;
  readonly ext: Maybe<Scalars["String"]["output"]>;
  readonly formats: Maybe<Scalars["JSON"]["output"]>;
  readonly hash: Scalars["String"]["output"];
  readonly height: Maybe<Scalars["Int"]["output"]>;
  readonly mime: Scalars["String"]["output"];
  readonly name: Scalars["String"]["output"];
  readonly previewUrl: Maybe<Scalars["String"]["output"]>;
  readonly provider: Scalars["String"]["output"];
  readonly provider_metadata: Maybe<Scalars["JSON"]["output"]>;
  readonly related: Maybe<ReadonlyArray<Maybe<GenericMorph>>>;
  readonly size: Scalars["Float"]["output"];
  readonly updatedAt: Maybe<Scalars["DateTime"]["output"]>;
  readonly url: Scalars["String"]["output"];
  readonly width: Maybe<Scalars["Int"]["output"]>;
};

export type UploadFileEntity = {
  readonly __typename?: "UploadFileEntity";
  readonly attributes: Maybe<UploadFile>;
  readonly id: Maybe<Scalars["ID"]["output"]>;
};

export type UploadFileEntityResponse = {
  readonly __typename?: "UploadFileEntityResponse";
  readonly data: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  readonly __typename?: "UploadFileEntityResponseCollection";
  readonly data: ReadonlyArray<UploadFileEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  readonly alternativeText: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly caption: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly ext: InputMaybe<StringFilterInput>;
  readonly folder: InputMaybe<UploadFolderFiltersInput>;
  readonly folderPath: InputMaybe<StringFilterInput>;
  readonly formats: InputMaybe<JsonFilterInput>;
  readonly hash: InputMaybe<StringFilterInput>;
  readonly height: InputMaybe<IntFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly mime: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UploadFileFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly previewUrl: InputMaybe<StringFilterInput>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly provider_metadata: InputMaybe<JsonFilterInput>;
  readonly size: InputMaybe<FloatFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly url: InputMaybe<StringFilterInput>;
  readonly width: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  readonly alternativeText: InputMaybe<Scalars["String"]["input"]>;
  readonly caption: InputMaybe<Scalars["String"]["input"]>;
  readonly ext: InputMaybe<Scalars["String"]["input"]>;
  readonly folder: InputMaybe<Scalars["ID"]["input"]>;
  readonly folderPath: InputMaybe<Scalars["String"]["input"]>;
  readonly formats: InputMaybe<Scalars["JSON"]["input"]>;
  readonly hash: InputMaybe<Scalars["String"]["input"]>;
  readonly height: InputMaybe<Scalars["Int"]["input"]>;
  readonly mime: InputMaybe<Scalars["String"]["input"]>;
  readonly name: InputMaybe<Scalars["String"]["input"]>;
  readonly previewUrl: InputMaybe<Scalars["String"]["input"]>;
  readonly provider: InputMaybe<Scalars["String"]["input"]>;
  readonly provider_metadata: InputMaybe<Scalars["JSON"]["input"]>;
  readonly size: InputMaybe<Scalars["Float"]["input"]>;
  readonly url: InputMaybe<Scalars["String"]["input"]>;
  readonly width: InputMaybe<Scalars["Int"]["input"]>;
};

export type UploadFileRelationResponseCollection = {
  readonly __typename?: "UploadFileRelationResponseCollection";
  readonly data: ReadonlyArray<UploadFileEntity>;
};

export type UploadFolder = {
  readonly __typename?: "UploadFolder";
  readonly children: Maybe<UploadFolderRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars["DateTime"]["output"]>;
  readonly files: Maybe<UploadFileRelationResponseCollection>;
  readonly name: Scalars["String"]["output"];
  readonly parent: Maybe<UploadFolderEntityResponse>;
  readonly path: Scalars["String"]["output"];
  readonly pathId: Scalars["Int"]["output"];
  readonly updatedAt: Maybe<Scalars["DateTime"]["output"]>;
};

export type UploadFolderChildrenArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UploadFolderFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UploadFolderEntity = {
  readonly __typename?: "UploadFolderEntity";
  readonly attributes: Maybe<UploadFolder>;
  readonly id: Maybe<Scalars["ID"]["output"]>;
};

export type UploadFolderEntityResponse = {
  readonly __typename?: "UploadFolderEntityResponse";
  readonly data: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  readonly __typename?: "UploadFolderEntityResponseCollection";
  readonly data: ReadonlyArray<UploadFolderEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly children: InputMaybe<UploadFolderFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly files: InputMaybe<UploadFileFiltersInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UploadFolderFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly parent: InputMaybe<UploadFolderFiltersInput>;
  readonly path: InputMaybe<StringFilterInput>;
  readonly pathId: InputMaybe<IntFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  readonly children: InputMaybe<ReadonlyArray<InputMaybe<Scalars["ID"]["input"]>>>;
  readonly files: InputMaybe<ReadonlyArray<InputMaybe<Scalars["ID"]["input"]>>>;
  readonly name: InputMaybe<Scalars["String"]["input"]>;
  readonly parent: InputMaybe<Scalars["ID"]["input"]>;
  readonly path: InputMaybe<Scalars["String"]["input"]>;
  readonly pathId: InputMaybe<Scalars["Int"]["input"]>;
};

export type UploadFolderRelationResponseCollection = {
  readonly __typename?: "UploadFolderRelationResponseCollection";
  readonly data: ReadonlyArray<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  readonly __typename?: "UsersPermissionsCreateRolePayload";
  readonly ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsDeleteRolePayload = {
  readonly __typename?: "UsersPermissionsDeleteRolePayload";
  readonly ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsLoginInput = {
  readonly identifier: Scalars["String"]["input"];
  readonly password: Scalars["String"]["input"];
  readonly provider: Scalars["String"]["input"];
};

export type UsersPermissionsLoginPayload = {
  readonly __typename?: "UsersPermissionsLoginPayload";
  readonly jwt: Maybe<Scalars["String"]["output"]>;
  readonly user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  readonly __typename?: "UsersPermissionsMe";
  readonly blocked: Maybe<Scalars["Boolean"]["output"]>;
  readonly confirmed: Maybe<Scalars["Boolean"]["output"]>;
  readonly email: Maybe<Scalars["String"]["output"]>;
  readonly id: Scalars["ID"]["output"];
  readonly role: Maybe<UsersPermissionsMeRole>;
  readonly username: Scalars["String"]["output"];
};

export type UsersPermissionsMeRole = {
  readonly __typename?: "UsersPermissionsMeRole";
  readonly description: Maybe<Scalars["String"]["output"]>;
  readonly id: Scalars["ID"]["output"];
  readonly name: Scalars["String"]["output"];
  readonly type: Maybe<Scalars["String"]["output"]>;
};

export type UsersPermissionsPasswordPayload = {
  readonly __typename?: "UsersPermissionsPasswordPayload";
  readonly ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsPermission = {
  readonly __typename?: "UsersPermissionsPermission";
  readonly action: Scalars["String"]["output"];
  readonly createdAt: Maybe<Scalars["DateTime"]["output"]>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt: Maybe<Scalars["DateTime"]["output"]>;
};

export type UsersPermissionsPermissionEntity = {
  readonly __typename?: "UsersPermissionsPermissionEntity";
  readonly attributes: Maybe<UsersPermissionsPermission>;
  readonly id: Maybe<Scalars["ID"]["output"]>;
};

export type UsersPermissionsPermissionFiltersInput = {
  readonly action: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  readonly __typename?: "UsersPermissionsPermissionRelationResponseCollection";
  readonly data: ReadonlyArray<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  readonly email: Scalars["String"]["input"];
  readonly password: Scalars["String"]["input"];
  readonly username: Scalars["String"]["input"];
};

export type UsersPermissionsRole = {
  readonly __typename?: "UsersPermissionsRole";
  readonly createdAt: Maybe<Scalars["DateTime"]["output"]>;
  readonly description: Maybe<Scalars["String"]["output"]>;
  readonly name: Scalars["String"]["output"];
  readonly permissions: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  readonly type: Maybe<Scalars["String"]["output"]>;
  readonly updatedAt: Maybe<Scalars["DateTime"]["output"]>;
  readonly users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsRoleEntity = {
  readonly __typename?: "UsersPermissionsRoleEntity";
  readonly attributes: Maybe<UsersPermissionsRole>;
  readonly id: Maybe<Scalars["ID"]["output"]>;
};

export type UsersPermissionsRoleEntityResponse = {
  readonly __typename?: "UsersPermissionsRoleEntityResponse";
  readonly data: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  readonly __typename?: "UsersPermissionsRoleEntityResponseCollection";
  readonly data: ReadonlyArray<UsersPermissionsRoleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly permissions: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly type: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly users: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  readonly description: InputMaybe<Scalars["String"]["input"]>;
  readonly name: InputMaybe<Scalars["String"]["input"]>;
  readonly permissions: InputMaybe<ReadonlyArray<InputMaybe<Scalars["ID"]["input"]>>>;
  readonly type: InputMaybe<Scalars["String"]["input"]>;
  readonly users: InputMaybe<ReadonlyArray<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  readonly __typename?: "UsersPermissionsUpdateRolePayload";
  readonly ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsUser = {
  readonly __typename?: "UsersPermissionsUser";
  readonly blocked: Maybe<Scalars["Boolean"]["output"]>;
  readonly confirmed: Maybe<Scalars["Boolean"]["output"]>;
  readonly createdAt: Maybe<Scalars["DateTime"]["output"]>;
  readonly email: Scalars["String"]["output"];
  readonly provider: Maybe<Scalars["String"]["output"]>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt: Maybe<Scalars["DateTime"]["output"]>;
  readonly username: Scalars["String"]["output"];
};

export type UsersPermissionsUserEntity = {
  readonly __typename?: "UsersPermissionsUserEntity";
  readonly attributes: Maybe<UsersPermissionsUser>;
  readonly id: Maybe<Scalars["ID"]["output"]>;
};

export type UsersPermissionsUserEntityResponse = {
  readonly __typename?: "UsersPermissionsUserEntityResponse";
  readonly data: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  readonly __typename?: "UsersPermissionsUserEntityResponseCollection";
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly blocked: InputMaybe<BooleanFilterInput>;
  readonly confirmationToken: InputMaybe<StringFilterInput>;
  readonly confirmed: InputMaybe<BooleanFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly email: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<UsersPermissionsUserFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly password: InputMaybe<StringFilterInput>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly resetPasswordToken: InputMaybe<StringFilterInput>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly username: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  readonly blocked: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly confirmationToken: InputMaybe<Scalars["String"]["input"]>;
  readonly confirmed: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly email: InputMaybe<Scalars["String"]["input"]>;
  readonly password: InputMaybe<Scalars["String"]["input"]>;
  readonly provider: InputMaybe<Scalars["String"]["input"]>;
  readonly resetPasswordToken: InputMaybe<Scalars["String"]["input"]>;
  readonly role: InputMaybe<Scalars["ID"]["input"]>;
  readonly username: InputMaybe<Scalars["String"]["input"]>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  readonly __typename?: "UsersPermissionsUserRelationResponseCollection";
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
};

export type CategoryFragment = { readonly __typename?: "Category"; readonly title: string };

export type FileFragment = {
  readonly __typename?: "UploadFile";
  readonly name: string;
  readonly alternativeText: string;
  readonly caption: string;
  readonly width: number;
  readonly height: number;
  readonly formats: any;
  readonly hash: string;
  readonly ext: string;
  readonly mime: string;
  readonly size: number;
  readonly url: string;
  readonly previewUrl: string;
  readonly provider: string;
  readonly provider_metadata: any;
};

export type LinkFragmentFragment = {
  readonly __typename?: "ComponentUiLink";
  readonly id: string;
  readonly label: string;
  readonly href: string;
};

export type NavLinkFragmentFragment = {
  readonly __typename?: "NavLink";
  readonly navLinks: ReadonlyArray<{
    readonly __typename?: "ComponentUiLink";
    readonly id: string;
    readonly label: string;
    readonly href: string;
  }>;
};

export type ProductFragment = {
  readonly __typename?: "Product";
  readonly name: string;
  readonly price: number;
  readonly discountPrice: number;
  readonly stock: number;
  readonly slug: string;
  readonly shortName: string;
  readonly description: string;
  readonly productPreviewImg: {
    readonly __typename?: "UploadFileEntityResponse";
    readonly data: {
      readonly __typename?: "UploadFileEntity";
      readonly id: string;
      readonly attributes: {
        readonly __typename?: "UploadFile";
        readonly name: string;
        readonly alternativeText: string;
        readonly caption: string;
        readonly width: number;
        readonly height: number;
        readonly formats: any;
        readonly hash: string;
        readonly ext: string;
        readonly mime: string;
        readonly size: number;
        readonly url: string;
        readonly previewUrl: string;
        readonly provider: string;
        readonly provider_metadata: any;
      };
    };
  };
  readonly category: {
    readonly __typename?: "CategoryEntityResponse";
    readonly data: {
      readonly __typename?: "CategoryEntity";
      readonly attributes: { readonly __typename?: "Category"; readonly title: string };
    };
  };
};

export type GetNavLinksQueryVariables = Exact<{ [key: string]: never }>;

export type GetNavLinksQuery = {
  readonly __typename?: "Query";
  readonly navLinks: {
    readonly __typename?: "NavLinkEntityResponseCollection";
    readonly data: ReadonlyArray<{
      readonly __typename?: "NavLinkEntity";
      readonly id: string;
      readonly attributes: {
        readonly __typename?: "NavLink";
        readonly navLinks: ReadonlyArray<{
          readonly __typename?: "ComponentUiLink";
          readonly id: string;
          readonly label: string;
          readonly href: string;
        }>;
      };
    }>;
  };
};

export type GetProductQueryVariables = Exact<{
  slug: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetProductQuery = {
  readonly __typename?: "Query";
  readonly products: {
    readonly __typename?: "ProductEntityResponseCollection";
    readonly data: ReadonlyArray<{
      readonly __typename?: "ProductEntity";
      readonly id: string;
      readonly attributes: {
        readonly __typename?: "Product";
        readonly name: string;
        readonly price: number;
        readonly discountPrice: number;
        readonly stock: number;
        readonly slug: string;
        readonly shortName: string;
        readonly description: string;
        readonly productPreviewImg: {
          readonly __typename?: "UploadFileEntityResponse";
          readonly data: {
            readonly __typename?: "UploadFileEntity";
            readonly id: string;
            readonly attributes: {
              readonly __typename?: "UploadFile";
              readonly name: string;
              readonly alternativeText: string;
              readonly caption: string;
              readonly width: number;
              readonly height: number;
              readonly formats: any;
              readonly hash: string;
              readonly ext: string;
              readonly mime: string;
              readonly size: number;
              readonly url: string;
              readonly previewUrl: string;
              readonly provider: string;
              readonly provider_metadata: any;
            };
          };
        };
        readonly category: {
          readonly __typename?: "CategoryEntityResponse";
          readonly data: {
            readonly __typename?: "CategoryEntity";
            readonly attributes: { readonly __typename?: "Category"; readonly title: string };
          };
        };
      };
    }>;
  };
};

export type GetProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductsQuery = {
  readonly __typename?: "Query";
  readonly products: {
    readonly __typename?: "ProductEntityResponseCollection";
    readonly data: ReadonlyArray<{
      readonly __typename?: "ProductEntity";
      readonly id: string;
      readonly attributes: {
        readonly __typename?: "Product";
        readonly name: string;
        readonly price: number;
        readonly discountPrice: number;
        readonly stock: number;
        readonly slug: string;
        readonly shortName: string;
        readonly description: string;
        readonly productPreviewImg: {
          readonly __typename?: "UploadFileEntityResponse";
          readonly data: {
            readonly __typename?: "UploadFileEntity";
            readonly id: string;
            readonly attributes: {
              readonly __typename?: "UploadFile";
              readonly name: string;
              readonly alternativeText: string;
              readonly caption: string;
              readonly width: number;
              readonly height: number;
              readonly formats: any;
              readonly hash: string;
              readonly ext: string;
              readonly mime: string;
              readonly size: number;
              readonly url: string;
              readonly previewUrl: string;
              readonly provider: string;
              readonly provider_metadata: any;
            };
          };
        };
        readonly category: {
          readonly __typename?: "CategoryEntityResponse";
          readonly data: {
            readonly __typename?: "CategoryEntity";
            readonly attributes: { readonly __typename?: "Category"; readonly title: string };
          };
        };
      };
    }>;
  };
};

export const LinkFragmentFragmentDoc = gql`
  fragment LinkFragment on ComponentUiLink {
    id
    label
    href
  }
`;
export const NavLinkFragmentFragmentDoc = gql`
  fragment NavLinkFragment on NavLink {
    navLinks {
      ...LinkFragment
    }
  }
  ${LinkFragmentFragmentDoc}
`;
export const FileFragmentDoc = gql`
  fragment File on UploadFile {
    name
    alternativeText
    caption
    width
    height
    formats
    hash
    ext
    mime
    size
    url
    previewUrl
    provider
    provider_metadata
  }
`;
export const CategoryFragmentDoc = gql`
  fragment Category on Category {
    title
  }
`;
export const ProductFragmentDoc = gql`
  fragment Product on Product {
    name
    price
    discountPrice
    productPreviewImg {
      data {
        id
        attributes {
          ...File
        }
      }
    }
    stock
    slug
    shortName
    description
    category {
      data {
        attributes {
          ...Category
        }
      }
    }
  }
  ${FileFragmentDoc}
  ${CategoryFragmentDoc}
`;
export const GetNavLinksDocument = gql`
  query getNavLinks {
    navLinks {
      data {
        id
        attributes {
          ...NavLinkFragment
        }
      }
    }
  }
  ${NavLinkFragmentFragmentDoc}
`;
export const GetProductDocument = gql`
  query getProduct($slug: String) {
    products(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          ...Product
        }
      }
    }
  }
  ${ProductFragmentDoc}
`;
export const GetProductsDocument = gql`
  query getProducts {
    products {
      data {
        id
        attributes {
          ...Product
        }
      }
    }
  }
  ${ProductFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, variables) =>
  action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getNavLinks(
      variables?: GetNavLinksQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetNavLinksQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetNavLinksQuery>(GetNavLinksDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        "getNavLinks",
        "query",
        variables
      );
    },
    getProduct(
      variables?: GetProductQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetProductQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetProductQuery>(GetProductDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        "getProduct",
        "query",
        variables
      );
    },
    getProducts(
      variables?: GetProductsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetProductsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetProductsQuery>(GetProductsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        "getProducts",
        "query",
        variables
      );
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
