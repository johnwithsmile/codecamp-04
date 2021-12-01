import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

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

export default function ImageUploadPage() {
  const [myWriter, setMyWriter] = useState("");
  const [myPapssword, setPapssword] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setContents] = useState("");
  const [myImages, setmyImages] = useState<string[]>([]);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  function onChangeMyWriter(event: ChangeEvent<HTMLInputElement>) {
    setMyWriter(event.target.value);
  }

  function onChangemyPapssword(event: ChangeEvent<HTMLInputElement>) {
    setPapssword(event.target.value);
  }

  function onChangemyTitle(event: ChangeEvent<HTMLInputElement>) {
    setMyTitle(event.target.value);
  }

  function onChangemyContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }

  async function onClickSubmit() {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPapssword,
          title: myTitle,
          contents: myContents,
          images: myImages,
        },
      },
    });
    console.log(result);
  }

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const myFile = event.target.files?.[0];
    console.log(myFile);

    if (!myFile?.size) {
      alert("파일이 없습니다!");
      return;
    }

    if (myFile?.size > 5 * 1024 * 1024) {
      alert("파일용량이 5MB 이상입니다!!");
      return;
    }

    if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
      alert("jpeg 또는 png만 업로드 가능합니다!");
      return;
    }

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
    setmyImages([result.data.uploadFile.url]);
  }

  return (
    <>
      <h1>이미지 업로드 !!!</h1>
      <input type="file" onChange={onChangeFile} />
      <br />
      작성자: <input type="text" onChange={onChangeMyWriter} />
      <br />
      비밀번호: <input type="password" onChange={onChangemyPapssword} />
      <br />
      제목: <input type="text" onChange={onChangemyTitle} />
      <br />
      내용: <input type="text" onChange={onChangemyContents} />
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
