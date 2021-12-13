import { withAuth } from "../../src/components/commons/hocs/withAuth";
import UsedItemList from "../../src/components/units/useditem/list/UsedItemList.container";

const UsedItemListPage = () => {
  return <UsedItemList />;
};

export default withAuth(UsedItemListPage);
