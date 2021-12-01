import BoardNewDetailWrite from "../../../src/components/units/board/detail/BoardNewDetail.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";

export default function BoardNewDetailWritePage() {
  return (
    <>
      <BoardNewDetailWrite />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
