import { gql, useQuery, useMutation } from "@apollo/client";
import router from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";
import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

interface IProps {
  onClickMove: () => void;
}

export default function HeaderUI(props: IProps) {
  const [logoutUser] = useMutation(LOGOUT_USER);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  async function onClickLogout() {
    await logoutUser();
    localStorage.removeItem("refreshToken");
    router.reload();
  }
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo id="/boards" onClick={props.onClickMove}>
          {" "}
          ☕️ I Love Coffee
        </InnerLogo>
        <div>
          <InnerButton id="/mypage">
            환영합니다 {data?.fetchUserLoggedIn.name} 님{" "}
          </InnerButton>
          <InnerButton id="/registration/signin" onClick={props.onClickMove}>
            로그인
          </InnerButton>
          <InnerButton id="/registration/signup" onClick={props.onClickMove}>
            회원가입
          </InnerButton>
          <InnerButton onClick={onClickLogout} id="/registration/signout">
            로그아웃
          </InnerButton>
          <InnerButton id="/basket" onClick={props.onClickMove}>
            장바구니
          </InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
