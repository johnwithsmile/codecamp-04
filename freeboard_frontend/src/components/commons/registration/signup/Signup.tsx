import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;

export default function SignupWritePage() {
  const router = useRouter();
  const [myEmail, setmyEmail] = useState("");
  const [myPassword, setmyPassword] = useState("");
  const [myName, setmyName] = useState("");
  const [createUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(CREATE_USER);

  function onChangeMyEmail(event: ChangeEvent<HTMLInputElement>) {
    setmyEmail(event.target.value);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setmyPassword(event.target.value);
  }

  function onChangeMyname(event: ChangeEvent<HTMLInputElement>) {
    setmyName(event.target.value);
  }

  async function onClickSignup() {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: myEmail,
            password: myPassword,
            name: myName,
          },
        },
      });
      alert("회원가입이 완료되었습니다 ");
      router.push(`/boards`);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <div> 회원 가입 </div>
      <div placeholder="이메일을 작성해주세요">
        이메일 : <input type="text" onChange={onChangeMyEmail} />
      </div>
      <div placeholder="닉네임을 작성해주세요">
        닉네임 : <input type="text" onChange={onChangeMyname} />
      </div>
      <div placeholder="비밀번호를 작성해주세요">
        비밀번호 : <input type="password" onChange={onChangeMyPassword} />
      </div>
      <div>
        <button onClick={onClickSignup}>회원가입 </button>
      </div>
    </>
  );
}
