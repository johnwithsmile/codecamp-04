import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller"
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function InfiniteScrollerPage() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        // console.log(fetchMoreResult?.fetchBoards);
        // console.log(prev.fetchBoards);
        if (!fetchMoreResult?.fetchBoards)
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult?.fetchBoards],
        };
      },
    });
  }


  return (
    <div style={{height:"700px",overflow:"auto;"}}>
    <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true} useWindow={false}
>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
        </div>
      ))}
    </InfiniteScroll>
    </div>
  );
}