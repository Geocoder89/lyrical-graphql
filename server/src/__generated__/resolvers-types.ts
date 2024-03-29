import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Lyric = {
  __typename?: 'Lyric';
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  likes: Scalars['Int']['output'];
  song?: Maybe<Song>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addLyricToSong?: Maybe<Lyric>;
  addSong?: Maybe<Song>;
  deleteSong?: Maybe<Song>;
  likeLyric?: Maybe<Lyric>;
};


export type MutationAddLyricToSongArgs = {
  content: Scalars['String']['input'];
  songId: Scalars['ID']['input'];
};


export type MutationAddSongArgs = {
  title: Scalars['String']['input'];
};


export type MutationDeleteSongArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLikeLyricArgs = {
  lyricId: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  lyric?: Maybe<Lyric>;
  song?: Maybe<Song>;
  songs?: Maybe<Array<Maybe<Song>>>;
};


export type QueryLyricArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySongArgs = {
  id: Scalars['ID']['input'];
};

export type Song = {
  __typename?: 'Song';
  id: Scalars['ID']['output'];
  lyrics?: Maybe<Array<Lyric>>;
  title: Scalars['String']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Lyric: ResolverTypeWrapper<Lyric>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Song: ResolverTypeWrapper<Song>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Lyric: Lyric;
  Mutation: {};
  Query: {};
  Song: Song;
  String: Scalars['String']['output'];
}>;

export type LyricResolvers<ContextType = any, ParentType extends ResolversParentTypes['Lyric'] = ResolversParentTypes['Lyric']> = ResolversObject<{
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  likes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  song?: Resolver<Maybe<ResolversTypes['Song']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addLyricToSong?: Resolver<Maybe<ResolversTypes['Lyric']>, ParentType, ContextType, RequireFields<MutationAddLyricToSongArgs, 'content' | 'songId'>>;
  addSong?: Resolver<Maybe<ResolversTypes['Song']>, ParentType, ContextType, RequireFields<MutationAddSongArgs, 'title'>>;
  deleteSong?: Resolver<Maybe<ResolversTypes['Song']>, ParentType, ContextType, RequireFields<MutationDeleteSongArgs, 'id'>>;
  likeLyric?: Resolver<Maybe<ResolversTypes['Lyric']>, ParentType, ContextType, RequireFields<MutationLikeLyricArgs, 'lyricId'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  lyric?: Resolver<Maybe<ResolversTypes['Lyric']>, ParentType, ContextType, RequireFields<QueryLyricArgs, 'id'>>;
  song?: Resolver<Maybe<ResolversTypes['Song']>, ParentType, ContextType, RequireFields<QuerySongArgs, 'id'>>;
  songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>;
}>;

export type SongResolvers<ContextType = any, ParentType extends ResolversParentTypes['Song'] = ResolversParentTypes['Song']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lyrics?: Resolver<Maybe<Array<ResolversTypes['Lyric']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Lyric?: LyricResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Song?: SongResolvers<ContextType>;
}>;

