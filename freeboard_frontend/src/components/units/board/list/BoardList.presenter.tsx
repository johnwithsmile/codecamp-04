import * as S from "./BoardList.styles";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import { IBoardListUIProps } from "./BoardList.types";
import { withAuth } from "../../../commons/hocs/withAuth";

export default function BoardListUi(props: IBoardListUIProps){
  return (
    <S.MyWrapper>
      <S.Title>베스트 게시글</S.Title>
      <S.TopWrapper>
        <S.Label>
          <>번호</>
          <div>제목</div>
          <div>작성자</div>
          <div>날짜</div>
          <div></div>
        </S.Label>
        {props.data2?.fetchBoardsOfTheBest.map((el, index) => (
          <S.WriterWrapper key={el._id}>
            {/* <S.Column><input type="checkbox"/></S.Column> */}
            <S.Column>{index + 1}</S.Column>
            <S.Column>{el?.writer}</S.Column>
            <S.Column>{el?.title}</S.Column>
            <S.Column>
              {el.createdAt.replaceAll("-", ".").split("T")[0]}
            </S.Column>
          </S.WriterWrapper>
        ))}
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.Title>일반 게시물</S.Title>
        <S.Label>
          <div>번호</div>
          <div>제목</div>
          <div>작성자</div>
          <div>날짜</div>
          <div></div>
        </S.Label>
        {props.data1?.fetchBoards.map((el, index) => (
          <S.InputWrapper key={el._id}>
            <S.Column>{10 - index}</S.Column>
            <S.Column id={el._id} onClick={props.onClickMoveToBoardDetail}>
              {el.title}
            </S.Column>
            <S.Column>{el?.writer}</S.Column>
            <S.Column>
              {el.createdAt.replaceAll("-", ".").split("T")[0]}
            </S.Column>
          </S.InputWrapper>
        ))}
      </S.BottomWrapper>
      <S.Footer>
        <Paginations01
          refetch={props.refetch}
          count={props.count}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
        />
        <S.Button onClick={props.onClickMoveToBoardNew}>
          {/* <S.PencilIcon src="/images/board/list/write.png" /> */}
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.MyWrapper>
  );
};




