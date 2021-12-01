import { useQuery } from "@apollo/client";
import { useState, MouseEvent } from "react";
import BoardListUi from "./BoardList.presenter";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import {
  FETCH_BOARDS,
  FETCH_BESTS,
  FETCH_BOARDS_COUNT,
} from "./BoardList.queries";
import { useRouter } from "next/router";
// import {IEerror} from './BoardList.types'

export default function BoardListWrite() {
  const router = useRouter();
  const [startPage, SetstartPage] = useState(1);

  function onClickMoveToBoardDetail(event: MouseEvent<HTMLDivElement>) {
    router.push(`/boards/${event.target.id}`);
  }

  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  const { data: data1, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: startPage } });

  const { data: data2 } = useQuery(FETCH_BESTS);
  const { data: data3 } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS_COUNT, {
    variables: { page: startPage },
  });
  const { data: dataBoardsCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);
  const lastPage = dataBoardsCount
    ? Math.ceil(dataBoardsCount.fetchBoardsCount / 10)
    : 0;

  return (
    <BoardListUi
      data1={data1}
      data2={data2}
      data3={data3}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      count={dataBoardsCount?.fetchBoardsCount}
      refetch={refetch}
      lastPage={lastPage}
      startPage={startPage}
    />
  );
}
