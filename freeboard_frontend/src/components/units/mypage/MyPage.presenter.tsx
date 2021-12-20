import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
      userPoint {
        amount
      }
    }
  }
`;

export default function MyPageUI(props: IProps) {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return (
    <div>
      <h1> MYPAGE </h1>
      {/* <img src={data?.fetchUserLoggedIn.picture} /> */}
      <img src="/images/avatar.png" />
      <div>{data?.fetchUserLoggedIn.name}</div>
      <div id="/mypages/point" onClick={props.onClickMove}>
        💰 내 포인트 : {data?.fetchUserLoggedIn.userPoint.amount}
      </div>
      <div id="/mypages/basket" onClick={props.onClickMove}>
        🛒 내 장바구니
      </div>
      <div>📖 내 판매기록</div>
      <div>👤 내 프로필 관리</div>
    </div>
  );
}
