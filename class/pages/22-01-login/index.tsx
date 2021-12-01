import { ChangeEvent, useContext, useState } from "react";
import { GlobalContext } from "../_app";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function loginPage() {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);
  const [myEmail, setmyEmail] = useState("");
  const [myPassword, setmyPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  function onChangeMyEmail(event: ChangeEvent<HTMLInputElement>) {
    setmyEmail(event.target.value);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setmyPassword(event.target.value);
  }

  async function onClickLogin() {
    const result = await loginUser({
      variables: {
        email: myEmail,
        password: myPassword,
      },
    });
    setAccessToken(result.data?.loginUser.accessToken); // 여기서 setAccessTocken 필요! (글로벌 스테이트에)
    // 로그인 성공된 페이지로 이동하기
    router.push('/22-02-login-success')
  }

  return (
    <>
      <div>
        아이디 : <input type="text" onChange={onChangeMyEmail} />
      </div>
      <div>
        비밀번호 : <input type="password" onChange={onChangeMyPassword} />
      </div>
      <div>
        <button onClick={onClickLogin}>로그인하기!! </button>
      </div>
    </>
  );
}
