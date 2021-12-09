import BoardListUI from "./UsedItemList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM } from "./UsedItemList.queries";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

export default function UsedItemList() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, { variables: { page: startPage } });

  function onClickMoveToUsedItemNew() {
    router.push("/useditems/new");
  }

  function onClickMoveToUsedItemDetail(event: MouseEvent<HTMLDivElement>) {
    if (event.target instanceof Element)
      router.push(`/useditems/${event.target.id}`);
  }

  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

  return (
    <BoardListUI
      data={data}
      onClickMoveToUsedItemNew={onClickMoveToUsedItemNew}
      onClickMoveToUsedItemDetail={onClickMoveToUsedItemDetail}
      refetch={refetch}
      startPage={startPage}
      setStartPage={setStartPage}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
