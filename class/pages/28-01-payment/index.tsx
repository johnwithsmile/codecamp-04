import Head from "next/head";
export default function PaymentPage() {
  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp75660508"); // Example: imp00000000
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "노르웨이 회전 의자",
        amount: 64900,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "", // 모바일 결제 후 리다이렉트될 주소!
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공시
          console.log(rsp);
          // createPointTransactionOfLoading 뮤테이션 실행하기 , 인자는 ImpUid
          // 결제 날짜, 결제된 시, 취소된 시간, 백엔드에서 만들거나(요청을 받았을 때 new Date()) 프론트에서도 만들 수 있음 new Date()로 mutation에 보내기
          // 백엔드가 추천인데
        } else {
          // 결제 실패 시
        }
      }
    );
  };

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
      <button onClick={onClickPayment}> 결제하기</button>
    </>
  );
}
