import { useRouter } from "next/router";
import UseditemDetailUI from "./UsedItemDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_USED_ITEM, DELETE_USED_ITEM } from "./UsedItemDetail.queries";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

export default function UsedItemDetail() {
  const router = useRouter();
  const [deleteUsedItem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  function onClickMoveToList() {
    router.push("/useditems");
  }

  //   function onClickMoveToUpdate() {
  //     router.push(`/useditems/${router.query.boardId}/edit`);
  //   }
  async function onClickDelete() {
    try {
      await deleteUsedItem({
        variables: { useditemId: String(router.query.useditemId) },
      });
      alert("게시물이 삭제되었습니다.");
      router.push("/useditems");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <UseditemDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      //   onClickMoveToUpdate={onClickMoveToUpdate}
      onClickDelete={onClickDelete}
    />
  );
}
