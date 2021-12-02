import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { InnerButton, InnerLogo, InnerWrapper, Wrapper } from "./Header.styles";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

interface IProps {
  onClickMove: () => void;
}

export default function HeaderUI(props: IProps) {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo id="/boards" onClick={props.onClickMove}>
          {" "}
          🤝 Pawinhand
        </InnerLogo>
        <div>
          <InnerButton id="/mypage">
            환영합니다, {data?.fetchUserLoggedIn.name}님{" "}
          </InnerButton>
          <InnerButton id="/login" onClick={props.onClickMove}>
            로그인
          </InnerButton>
          <InnerButton id="/signup" onClick={props.onClickMove}>
            회원가입
          </InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
