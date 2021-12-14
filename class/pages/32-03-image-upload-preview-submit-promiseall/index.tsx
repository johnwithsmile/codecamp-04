import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
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
      writer
      title
      contents
      images
    }
  }
`;
export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [myFiles, setMyFiles] = useState([]);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  function onChangeFile(event: any) {
    const file = event.target.files[0];
    console.log(file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      console.log(data.target.result);
      setImageUrl(data.target?.result);
      setMyFiles((prev) => [...prev, file]);
    };
  }
  async function onClickSubmit() {
    let myImagesUrls = ["", "", ""];
    // 1. 파일업로드
    if (myFiles.length) {
      // 1. 각각올리기 테스트
      // const start = performance.now();
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // const end = performance.now();
      // console.log(end - start);
      // 2. 동시올리기 테스트
      // vs Propmise.race 먼저 끝난거 하나만 캐치하기
      const start = performance.now();
      const result = await Promise.all([
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
      ]);
      const end = performance.now();
      console.log(end - start);
      console.log(result);
      myImagesUrls = result.map((el) => el.data.uploadFile.url);

      //   const result1 = await uploadFile({
      //     variables: {
      //       file: myFiles[0],
      //     },
      //   });
      //   myImagesUrls[0] = result1.data?.uploadFile.url || "";
      //   const result2 = await uploadFile({
      //     variables: {
      //       file: myFiles[1],
      //     },
      //   });
      //   myImagesUrls[1] = result2.data?.uploadFile.url || "";
      //   const result3 = await uploadFile({
      //     variables: {
      //       file: myFiles[2],
      //     },
      //   });
      //   myImagesUrls[2] = result3.data?.uploadFile.url || "";
    }
    // 2. 업로드된 파일로 게시물 등록
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "조니",
          password: "1234",
          title: "안녕하세요",
          contents: "업로드 연습중",
          images: [...myImagesUrls],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  }
  return (
    <>
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />;
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
