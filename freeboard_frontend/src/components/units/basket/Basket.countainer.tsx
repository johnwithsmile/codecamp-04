import { useQuery } from "@apollo/client";
import MyBasketUI from "./Basket.presenter";
import { useEffect, useState } from "react";
import { FETCH_USED_ITEMS_IPICKED } from "./Basket.qureries";
import { IUseditem } from "../../../commons/types/generated/types";
import router from "next/router";
export default function MyBasketPage() {
  const [basketItems, setbasketItems] = useState<IUseditem[]>([]);

  async function onClickDeleteBasket(event) {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    const newBasket = basket.filter(
      (_, index) => index !== Number(event.target.id)
    );
    localStorage.setItem("basket", JSON.stringify(newBasket));
    setbasketItems(newBasket);
    alert("상품이 삭제되었습니다");
  }
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setbasketItems(baskets);
  }, []);

  // const { data } = useQuery(FETCH_USED_ITEMS_IPICKED);
  return (
    <MyBasketUI
      basketItems={basketItems}
      onClickDeleteBasket={onClickDeleteBasket}
    />
  );
}
