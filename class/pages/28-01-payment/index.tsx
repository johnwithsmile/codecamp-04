import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  function onClickPayment() {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "마우스",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "", // 모바일 결제후å 리다이렉트될 주소!!
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공시
          console.log(rsp);

          // 1. createPointTransactionsOfLoading 뮤테이션 실행하기!!(impUid 인자로 넘기기!!)

          // 2. 결제날짜 결제된 시간, 취소된 시간 등 시간은...??
        } else {
          // 결제 실패시
        }
      }
    );
  }

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      결제금액: <input type="text" />
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
