import { getDate } from "../../../../commons/libraries/utils";
import { withAuth } from "../../../commons/hocs/withAuth";
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
import { IUsedItemListUIProps, FetchMoreOptions } from "./UsedItemList.types";
import InfiniteScroll from "react-infinite-scroller";

function UsedItemListUI(props: IUsedItemListUIProps) {
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
          {props.data?.fetchUseditems.map((el) => (
            <div key={el._id}>
              <span>{el.name}</span>
              <span>{el.remarks}</span>
              <span>{el.contents}</span>
              <span>{el.price}</span>
              <span>{el.images}</span>
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

export default withAuth(UsedItemListUI);
