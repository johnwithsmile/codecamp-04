import MyPage from "../../src/components/units/mypage/MyPage.cotainer";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
const MyPagePage = () => {
  return <MyPage />;
};

export default withAuth(MyPagePage);
