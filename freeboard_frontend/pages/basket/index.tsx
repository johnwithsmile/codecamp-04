import MyBasketPage from "../../src/components/units/basket/Basket.countainer";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

const BasketPage = () => {
  return <MyBasketPage />;
};

export default withAuth(BasketPage);
