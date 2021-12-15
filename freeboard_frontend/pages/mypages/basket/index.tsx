import MyBasketPage from "../../../src/components/units/basket/Basket.countainer";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import MyPage from "../../../src/components/units/mypage/MyPage.cotainer";

const BasketPage = () => {
  return (
    <>
      <MyPage />
      <MyBasketPage />
    </>
  );
};

export default withAuth(BasketPage);
