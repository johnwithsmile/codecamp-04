import { ChangeEvent, useContext, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function SigninWritePage() {
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
    localStorage.setItem(
      "myAccessToken",
      result.data?.loginUser.accessToken || ""
      )
    setAccessToken(result.data?.loginUser.accessToken); 
    router.push('/boards')
    alert("로그인이 완료되었습니다 ")
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
        <button onClick={onClickLogin}>로그인 </button>
      </div>
    </>
  );
}
