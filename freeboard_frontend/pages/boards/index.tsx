import BoardListWrite from "../../src/components/units/board/list/BoardList.container";
import { withAuth } from '../../src/components/commons/hocs/withAuth'

const BoardListWritePage= () =>{
  return <BoardListWrite />;
}

export default withAuth(BoardListWritePage);
