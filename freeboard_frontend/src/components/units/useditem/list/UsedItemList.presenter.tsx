import { getDate } from "../../../../commons/libraries/utils";
import {
  Wrapper,
  TableTop,
  TableBottom,
  Row,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  ColumnBasic,
  ColumnTitle,
  Footer,
  PencilIcon,
  Button,
  TextToken,
} from "./UsedItemList.styles";
// import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import { IUsedItemListUIProps } from "./UsedItemList.types";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";

export default function UsedItemListUI(props: IUsedItemListUIProps) {
  return (
    <Wrapper>
      {/* <Searchbars01
      refetch={props.refetch}
      refetchBoardsCount={props.refetchBoardsCount}
      onChangeKeyword={props.onChangeKeyword}
      /> */}
      <TableTop />
      <Row>
        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
        <ColumnHeaderTitle>상품명</ColumnHeaderTitle>
        <ColumnHeaderBasic>판매가격</ColumnHeaderBasic>
        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
      </Row>
      <Row style={{ height: "700px", overflow: "auto;" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          <div>상품목록</div>
          {props.data?.fetchUseditems.map((el) => (
            <div key={uuidv4}>
              <span onClick={props.onClickMoveToUsedItemDetail} id={el._id}>
                상품명: {el.name}
              </span>
              <span>가격: {el.price}</span>
              <span>한줄요약 : {el.remarks}</span>
            </div>
          ))}
        </InfiniteScroll>
      </Row>
      <TableBottom />
      <Footer>
        <Button onClick={props.onClickMoveToUsedItemNew}>
          <PencilIcon src="/images/board/list/write.png" />
          상품 등록하기
        </Button>
      </Footer>
    </Wrapper>
  );
}
