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
  onClickLogo: () => void;
  onClickMoveToLogin: () => void;
  
}

export default function HeaderUI(props: IProps) {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}> 🤝 Pawinhand</InnerLogo>
        <div>
          <InnerButton>환영합니다, {data?.fetchUserLoggedIn.name}님 </InnerButton>
          <InnerButton id="/login"onClick={props.onClickMoveToLogin}>로그인</InnerButton>
          <InnerButton id="/signup">회원가입</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}

