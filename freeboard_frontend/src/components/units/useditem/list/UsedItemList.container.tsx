import UsedItemListUI from "./UsedItemList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS } from "./UsedItemList.queries";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IUseditem,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export default function UsedItemList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  function onLoadMore() {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        // console.log(fetchMoreResult?.fetchBoards);
        // console.log(prev.fetchBoards);
        if (!fetchMoreResult?.fetchUseditems)
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  }

  const onclickBasket = (el: IUseditem) => () => {
    console.log(el);
    // 배열로 담아주자
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]") || [];
    // 이미 담았는지 체크
    let isExists = false;
    baskets.forEach((basketEl: IUseditem) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("이미 장바구니에 담으셨습니다.");
      return;
    }
    const { __typename, ...newEL } = el;
    baskets.push(newEL);
    localStorage.setItem("basket", JSON.stringify(baskets));
  };

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
    <UsedItemListUI
      data={data}
      onClickMoveToUsedItemNew={onClickMoveToUsedItemNew}
      onClickMoveToUsedItemDetail={onClickMoveToUsedItemDetail}
      // refetch={refetch}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      onLoadMore={onLoadMore}
      onclickBasket={onclickBasket}
    />
  );
}
