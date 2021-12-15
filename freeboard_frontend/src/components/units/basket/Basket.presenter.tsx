export default function MyBasketUI(props) {
  return (
    <>
      <h1>내 장바구니</h1>
      {props.basketItems.map((el, index) => (
        <div key={el.index}>
          <span>번호 :{index + 1}</span>
          <span>상품명:{el.name}</span>
          <span>가격{el.price}</span>
          <span>한줄요약 : {el.remarks}</span>
          <button id={index} onClick={props.onClickDeleteBasket}>
            삭제하기
          </button>
          <button>결제하기</button>
        </div>
      ))}
    </>
  );
}
// router 로 넘기긱
