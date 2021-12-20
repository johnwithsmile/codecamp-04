import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: "61bab569717be5002baa75a8" },
    }
  );
  function onClickOptimisticUi() {
    // 여기서 좋아요 증가시키는 mutation
    likeBoard({
      variables: { boardId: "61bab569717be5002baa75a8" },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "61bab569717be5002baa75a8" },
      //   },
      // ], 리페치 될때까지 기다려야됨
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "61bab569717be5002baa75a8" },
          data: {
            fetchBoard: {
              _id: "61bab569717be5002baa75a8", // 아이디와 타입네임은 아폴로상의 규칙이기때문에 필요
              __typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  }
  return (
    <>
      <div>좋아요 갯수 : {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUi}>좋아요 올리기</button>
    </>
  );
}
