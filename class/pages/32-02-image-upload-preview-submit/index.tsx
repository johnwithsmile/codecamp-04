import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [imageUrl, setimageUrl] = useState("");
  const [myFile, setmyfile] = useState();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  function onChangeFile(event) {
    const file = event.target.files[0];
    console.log(file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      console.log(data.target.result);
      setimageUrl(data.target?.result);
      setmyfile(file);
    };
  }

  async function onClickSumbmit() {
    let myImageUrl = "";

    // 1. 파일업로드
    if (myFile) {
      const result1 = await uploadFile({
        variables: {
          file: myFile,
        },
      });
      myImageUrl = result1.data?.uploadFile.url || "";
    }

    // 2. 업로드된 파일로 게시물 등록
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "안녕하세요~~",
          contents: "이미지 업로드 연습중임",
          images: [myImageUrl],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  }

  return (
    <>
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile}></input>
      <button onClick={onClickSumbmit}> 등록하기</button>
    </>
  );
}
