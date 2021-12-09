export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type IBoard = {
  __typename?: 'Board';
  _id: Scalars['ID'];
  writer?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  contents: Scalars['String'];
  youtubeUrl?: Maybe<Scalars['String']>;
  likeCount: Scalars['Int'];
  dislikeCount: Scalars['Int'];
  images?: Maybe<Array<Scalars['String']>>;
  boardAddress?: Maybe<IBoardAddress>;
  user?: Maybe<IUser>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IBoardAddress = {
  __typename?: 'BoardAddress';
  _id: Scalars['ID'];
  zipcode?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IBoardAddressInput = {
  zipcode?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
};

export type IBoardComment = {
  __typename?: 'BoardComment';
  _id: Scalars['ID'];
  writer?: Maybe<Scalars['String']>;
  contents: Scalars['String'];
  rating: Scalars['Float'];
  user?: Maybe<IUser>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ICreateBoardCommentInput = {
  writer?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  contents: Scalars['String'];
  rating: Scalars['Float'];
};

export type ICreateBoardInput = {
  writer?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  contents: Scalars['String'];
  youtubeUrl?: InputMaybe<Scalars['String']>;
  boardAddress?: InputMaybe<IBoardAddressInput>;
  images?: InputMaybe<Array<Scalars['String']>>;
};

export type ICreateUseditemInput = {
  name: Scalars['String'];
  remarks: Scalars['String'];
  contents: Scalars['String'];
  price: Scalars['Int'];
  tags?: InputMaybe<Array<Scalars['String']>>;
  useditemAddress?: InputMaybe<IUseditemAddressInput>;
  images?: InputMaybe<Array<Scalars['String']>>;
};

export type ICreateUseditemQuestionAnswerInput = {
  contents: Scalars['String'];
};

export type ICreateUseditemQuestionInput = {
  contents: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
};

export type IFileManager = {
  __typename?: 'FileManager';
  _id: Scalars['ID'];
  url: Scalars['String'];
  size?: Maybe<Scalars['Float']>;
  isUsed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IMutation = {
  __typename?: 'Mutation';
  createBoard: IBoard;
  deleteBoard: Scalars['ID'];
  deleteBoards: Array<Scalars['ID']>;
  dislikeBoard: Scalars['Int'];
  likeBoard: Scalars['Int'];
  updateBoard: IBoard;
  createBoardComment: IBoardComment;
  deleteBoardComment: Scalars['ID'];
  updateBoardComment: IBoardComment;
  uploadFile: IFileManager;
  createPointTransactionOfBuyingAndSelling: IUseditem;
  createPointTransactionOfLoading: IPointTransaction;
  restoreAccessToken: IToken;
  createUseditem: IUseditem;
  deleteUseditem: Scalars['ID'];
  updateUseditem: IUseditem;
  toggleUseditemPick: Scalars['Int'];
  createUseditemQuestion: IUseditemQuestion;
  deleteUseditemQuestion: Scalars['ID'];
  updateUseditemQuestion: IUseditemQuestion;
  createUseditemQuestionAnswer: IUseditemQuestionAnswer;
  deleteUseditemQuestionAnswer: Scalars['String'];
  updateUseditemQuestionAnswer: IUseditemQuestionAnswer;
  createUser: IUser;
  loginUser: IToken;
  loginUserExample: IToken;
  logoutUser: Scalars['Boolean'];
  resetUserPassword: Scalars['Boolean'];
  updateUser: IUser;
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['ID'];
};


export type IMutationDeleteBoardsArgs = {
  boardIds: Array<Scalars['ID']>;
};


export type IMutationDislikeBoardArgs = {
  boardId: Scalars['ID'];
};


export type IMutationLikeBoardArgs = {
  boardId: Scalars['ID'];
};


export type IMutationUpdateBoardArgs = {
  updateBoardInput: IUpdateBoardInput;
  password?: InputMaybe<Scalars['String']>;
  boardId: Scalars['ID'];
};


export type IMutationCreateBoardCommentArgs = {
  createBoardCommentInput: ICreateBoardCommentInput;
  boardId: Scalars['ID'];
};


export type IMutationDeleteBoardCommentArgs = {
  password?: InputMaybe<Scalars['String']>;
  boardCommentId: Scalars['ID'];
};


export type IMutationUpdateBoardCommentArgs = {
  updateBoardCommentInput: IUpdateBoardCommentInput;
  password?: InputMaybe<Scalars['String']>;
  boardCommentId: Scalars['ID'];
};


export type IMutationUploadFileArgs = {
  file: Scalars['Upload'];
};


export type IMutationCreatePointTransactionOfBuyingAndSellingArgs = {
  useritemId: Scalars['ID'];
};


export type IMutationCreatePointTransactionOfLoadingArgs = {
  impUid: Scalars['ID'];
};


export type IMutationCreateUseditemArgs = {
  createUseditemInput: ICreateUseditemInput;
};


export type IMutationDeleteUseditemArgs = {
  useditemId: Scalars['ID'];
};


export type IMutationUpdateUseditemArgs = {
  updateUseditemInput: IUpdateUseditemInput;
  useditemId: Scalars['ID'];
};


export type IMutationToggleUseditemPickArgs = {
  useditemId: Scalars['ID'];
};


export type IMutationCreateUseditemQuestionArgs = {
  createUseditemQuestionInput: ICreateUseditemQuestionInput;
  useditemId: Scalars['ID'];
};


export type IMutationDeleteUseditemQuestionArgs = {
  useditemQuestionId: Scalars['ID'];
};


export type IMutationUpdateUseditemQuestionArgs = {
  updateUseditemQuestionInput: IUpdateUseditemQuestionInput;
  useditemQuestionId: Scalars['ID'];
};


export type IMutationCreateUseditemQuestionAnswerArgs = {
  createUseditemQuestionAnswerInput: ICreateUseditemQuestionAnswerInput;
  useditemQuestionId: Scalars['ID'];
};


export type IMutationDeleteUseditemQuestionAnswerArgs = {
  useditemQuestionAnswerId: Scalars['ID'];
};


export type IMutationUpdateUseditemQuestionAnswerArgs = {
  updateUseditemQuestionAnswerInput: IUpdateUseditemQuestionAnswerInput;
  useditemQuestionAnswerId: Scalars['ID'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationLoginUserArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type IMutationLoginUserExampleArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type IMutationResetUserPasswordArgs = {
  password: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};

export type IPointTransaction = {
  __typename?: 'PointTransaction';
  _id: Scalars['ID'];
  impUid?: Maybe<Scalars['ID']>;
  amount: Scalars['Int'];
  balance: Scalars['Int'];
  status: Scalars['String'];
  statusDetail: Scalars['String'];
  useditem?: Maybe<IUseditem>;
  user?: Maybe<IUser>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IQuery = {
  __typename?: 'Query';
  fetchBoard: IBoard;
  fetchBoards: Array<IBoard>;
  fetchBoardsCount: Scalars['Int'];
  fetchBoardsCountOfMine: Scalars['Int'];
  fetchBoardsOfMine: Array<IBoard>;
  fetchBoardsOfTheBest: Array<IBoard>;
  fetchBoardComments: Array<IBoardComment>;
  fetchPointTransactions: Array<IPointTransaction>;
  fetchPointTransactionsCountOfBuying: Scalars['Int'];
  fetchPointTransactionsCountOfLoading: Scalars['Int'];
  fetchPointTransactionsCountOfSelling: Scalars['Int'];
  fetchPointTransactionsOfBuying: Array<IPointTransaction>;
  fetchPointTransactionsOfLoading: Array<IPointTransaction>;
  fetchPointTransactionsOfSelling: Array<IPointTransaction>;
  fetchUseditem: IUseditem;
  fetchUseditems: Array<IUseditem>;
  fetchUseditemsCountIBought: Scalars['Int'];
  fetchUseditemsCountIPicked: Scalars['Int'];
  fetchUseditemsCountISold: Scalars['Int'];
  fetchUseditemsIBought: Array<IUseditem>;
  fetchUseditemsIPicked: Array<IUseditem>;
  fetchUseditemsISold: Array<IUseditem>;
  fetchUseditemsOfTheBest: Array<IUseditem>;
  fetchUseditemQuestions: Array<IUseditemQuestion>;
  fetchUseditemQuestionAnswers: Array<IUseditemQuestionAnswer>;
  fetchUserLoggedIn: IUser;
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['ID'];
};


export type IQueryFetchBoardsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  search?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchBoardsCountArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchBoardCommentsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  boardId: Scalars['ID'];
};


export type IQueryFetchPointTransactionsArgs = {
  search?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchPointTransactionsOfBuyingArgs = {
  search?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchPointTransactionsOfLoadingArgs = {
  search?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchPointTransactionsOfSellingArgs = {
  search?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchUseditemArgs = {
  useditemId: Scalars['ID'];
};


export type IQueryFetchUseditemsArgs = {
  isSoldout?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchUseditemsIBoughtArgs = {
  search?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchUseditemsIPickedArgs = {
  search?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchUseditemsISoldArgs = {
  search?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchUseditemQuestionsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  useditemId: Scalars['ID'];
};


export type IQueryFetchUseditemQuestionAnswersArgs = {
  page?: InputMaybe<Scalars['Int']>;
  useditemQuestionId: Scalars['ID'];
};

export type IToken = {
  __typename?: 'Token';
  accessToken: Scalars['String'];
};

export type IUpdateBoardCommentInput = {
  contents?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
};

export type IUpdateBoardInput = {
  title?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  youtubeUrl?: InputMaybe<Scalars['String']>;
  boardAddress?: InputMaybe<IBoardAddressInput>;
  images?: InputMaybe<Array<Scalars['String']>>;
};

export type IUpdateUseditemInput = {
  name?: InputMaybe<Scalars['String']>;
  remarks?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  useditemAddress?: InputMaybe<IUseditemAddressInput>;
  images?: InputMaybe<Array<Scalars['String']>>;
};

export type IUpdateUseditemQuestionAnswerInput = {
  contents: Scalars['String'];
};

export type IUpdateUseditemQuestionInput = {
  contents: Scalars['String'];
};

export type IUpdateUserInput = {
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
};

export type IUseditem = {
  __typename?: 'Useditem';
  _id: Scalars['ID'];
  name: Scalars['String'];
  remarks: Scalars['String'];
  contents: Scalars['String'];
  price?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Scalars['String']>>;
  images?: Maybe<Array<Scalars['String']>>;
  pickedCount?: Maybe<Scalars['Int']>;
  useditemAddress?: Maybe<IUseditemAddress>;
  buyer?: Maybe<IUser>;
  seller?: Maybe<IUser>;
  soldAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IUseditemAddress = {
  __typename?: 'UseditemAddress';
  _id: Scalars['ID'];
  zipcode?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IUseditemAddressInput = {
  zipcode?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
};

export type IUseditemQuestion = {
  __typename?: 'UseditemQuestion';
  _id: Scalars['ID'];
  contents: Scalars['String'];
  useditem: IUseditem;
  user: IUser;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IUseditemQuestionAnswer = {
  __typename?: 'UseditemQuestionAnswer';
  _id: Scalars['ID'];
  contents: Scalars['String'];
  useditemQuestion: IUseditemQuestion;
  user: IUser;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IUser = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  userPoint?: Maybe<IUserPoint>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IUserPoint = {
  __typename?: 'UserPoint';
  _id: Scalars['ID'];
  amount: Scalars['Int'];
  user: IUser;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};
