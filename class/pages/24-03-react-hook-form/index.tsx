import { useForm } from "react-hook-form";

interface FromValues {
  myEmail: string;
  myPassword: string;
}

export default function ReactHookFromPage() {
  const { handleSubmit, register } = useForm();

  function onClickLogin(data: FromValues) {
    console.log(data);
    // loginUser API 요청하기!!
  }

  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      이메일: <input type="text" {...register("myEmail")} />
      비밀번호: <input type="password" {...register("myPassword")} />
      <button>로그인하기</button>
    </form>
  );
}
