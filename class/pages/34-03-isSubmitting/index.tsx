import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { formatStrategyKeys } from "rc-tree-select/lib/utils/strategyUtil";
import { ChangeEvent, useCallback, useState } from "react";
import { useForm } from "react-hook-form";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const inputsInit = {
  writer: "",
  password: "",
  title: "",
  contents: "",
};

export default function IsSubmittingPage() {
  // const { formStage } = useForm()
  // formatStrategyKeys.isSubmitting // 리액트 훅폼의 모습
  const [inputs, setInputs] = useState(inputsInit);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [isSubmitting, SetIsSubmitting] = useState(false);
  const onChangeInputs = useCallback(
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setInputs((prev) => ({
        ...prev,
        [name]: event.target.value,
      }));
    },
    []
  );

  async function onClickSubmit() {
    SetIsSubmitting(true);
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: { ...inputs },
        },
      });
      console.log(result);
      Modal.confirm({ content: "등록에 성공하였습니다." });
      SetIsSubmitting(false);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  return (
    <>
      작성자 <input type="text" onChange={onChangeInputs("writer")} />
      <br />
      비밀번호 <input type="password" onChange={onChangeInputs("password")} />
      <br />
      제목 <input type="text" onChange={onChangeInputs("title")} />
      <br />
      내용 <input type="text" onChange={onChangeInputs("contents")} />
      <br />
      <button onClick={onClickSubmit} disabled={isSubmitting}>
        등록하기
      </button>
    </>
  );
}
