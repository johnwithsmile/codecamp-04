import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

export default function BasketLoggedInpage() {
  const [basketItems, setbasketItems] = useState<IBoard[]>([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setbasketItems(baskets);
  }, []);

  return (
    <>
      <h1>비회원으로 담은 나만의 장바구니!!</h1>
      {basketItems.map((el, index) => (
        <div key={el._id}>
          <span>{index + 1}</span>
          <span>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </>
  );
}
