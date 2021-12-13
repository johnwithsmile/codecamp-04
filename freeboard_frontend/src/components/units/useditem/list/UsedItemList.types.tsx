import { ApolloQueryResult } from "@apollo/client";
import { Dispatch, MouseEvent, SetStateAction } from "react";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

export interface IUsedItemListUIProps {
  onLoadMore: (page: number) => void;
  data?: Pick<IQuery, "fetchUseditem">;
  onClickMoveToUsedItemNew: () => void;
  onClickMoveToUsedItemDetail: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (
    variables: Partial<IQueryFetchUseditemArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditem">>>;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  keyword: string;
  onChangeKeyword: (value: string) => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}

export interface FetchMoreOptions<
  TData = any,
  TVariables = OperationVariables
> {
  updateQuery?: (
    previousQueryResult: TData,
    options: {
      fetchMoreResult?: TData;
      variables?: TVariables;
    }
  ) => TData;
}
