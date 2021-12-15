import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import MyPage from "../../../src/components/units/mypage/MyPage.cotainer";
import CreatPoint from "../../../src/components/commons/payment/createpoint/CreatPoint";
const MyPointPage = () => {
  return (
    <>
      <MyPage />;
      <CreatPoint />
    </>
  );
};

export default withAuth(MyPointPage);
