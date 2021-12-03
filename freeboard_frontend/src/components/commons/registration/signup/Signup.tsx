import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
      createdAt
    }
  }
`;

export default function SignupWritePage() {
  const router = useRouter();
  const [myEmail, setmyEmail] = useState("");
  const [myPassword, setmyPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(CREATE_USER);

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
    );
    setAccessToken(result.data?.loginUser.accessToken);
    router.push("/boards");
    alert("로그인이 완료되었습니다 ");
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
