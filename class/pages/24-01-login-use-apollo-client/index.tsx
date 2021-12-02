import { ChangeEvent, useContext, useState } from "react";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);

  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const client = useApolloClient();

  function onChangeMyEmail(event: ChangeEvent<HTMLElement>) {
    setMyEmail(event.target.value);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLElement>) {
    setMyPassword(event.target.value);
  }

  async function onClickLogin() {
    const result = await loginUser({
      variables: {
        email: myEmail,
        password: myPassword,
      },
    });
    const accessToken = result.data?.loginUser.accessToken || "";
    localStorage.setItem("accessToken", accessToken);
    setAccessToken?.(accessToken); // 여기서 setAccesToken 필요! (글로벌 스테이트에...)

    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    });

    setUserInfo(resultUserInfo.data.fetchUserLoggedIn);
    // 로그인 버튼을 클릭했을 때
    // 이메일과 비밀번호 요청,
    // 그리고 setAccessToken을 글로벌스테이트에 저장
    // fetchUserLoggedin으로 사용자 정보를 받아옴
    // const result = fetchUserLoggedIn()
    // setUserInfo(result.data?.fetchUserLoggedIn)
    // const result = await axios.get("koreanjson.com/post/1")이런 방식으로 원하는 곳에서 useQuery필요
    // 그리고 유저인포도 따로 저장함 <- 이게 안되면 유저 정보가 필요한 곳에 fetch요청을해야함(로그인성공페이지)
    // 그런데 한군데서만 필요한 것이 아님

    // 로그인 성공된 페이지로 이동시키기!!
    router.push("/24-02-login-success");
  }

  return (
    <>
      이메일:
      <input type="text" onChange={onChangeMyEmail} />
      비밀번호:
      <input type="password" onChange={onChangeMyPassword} />
      <button onClick={onClickLogin}>로그인하기!!</button>
    </>
  );
}
