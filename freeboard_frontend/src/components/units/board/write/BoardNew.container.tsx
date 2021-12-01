import { useRouter } from "next/router";
import BoardNewWriteUI from "./BoardNew.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState, useRef } from "react";
import {
  CREATE_BOARD,
  UPDATE_BOARD,
  FETCH_BOARD,
  UPLOAD_FILE,
} from "./BoardNew.queries";
import { IMyVariables, IBoardNewWriteprops } from "./BoardNew.types";

export default function BoardNewWrite(props: IBoardNewWriteprops) {
  const router = useRouter();
  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [myWriterError, setMyWriterError] = useState("");
  const [myPasswordError, setMyPasswordError] = useState("");
  const [myTitleError, setMyTitleError] = useState("");
  const [myContentsError, setMyContentsError] = useState("");

  const [myColor, setMyColor] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [myImages, setmyImages] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    // console.log(data);
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  const { data: data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  function onChangeMyWriter(event: ChangeEvent<HTMLInputElement>) {
    setMyWriter(event.target.value);
    if (
      event.target.value !== "" &&
      myPassword !== "" &&
      myTitle !== "" &&
      myContents !== ""
    ) {
      setMyColor(true);
      setMyWriterError("");
    } else setMyColor(false);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
    if (
      myWriter !== "" &&
      event.target.value !== "" &&
      myTitle !== "" &&
      myContents !== ""
    ) {
      setMyColor(true);
      setMyWriterError("");
    } else setMyColor(false);
  }

  function onChangeMyTitle(event: ChangeEvent<HTMLInputElement>) {
    setMyTitle(event.target.value);
    if (
      myWriter !== "" &&
      myPassword !== "" &&
      event.target.value !== "" &&
      myContents !== ""
    ) {
      setMyColor(true);
      setMyWriterError("");
    } else setMyColor(false);
  }

  function onChangeMyContents(event: ChangeEvent<HTMLInputElement>) {
    setMyContents(event.target.value);
    if (
      myWriter !== "" &&
      myPassword !== "" &&
      myTitle !== "" &&
      event.target.value !== ""
    ) {
      setMyColor(true);
      setMyWriterError("");
    } else setMyColor(false);
  }

  async function onClickSubmit() {
    if (myWriter === "") {
      setMyWriterError("작성자를 입력해주세요.");
    }
    if (myPassword === "") {
      setMyPasswordError("비밀번호를 입력해주세요.");
    }
    if (myTitle === "") {
      setMyTitleError("제목을 입력해주세요.");
    }
    if (myContents === "") {
      setMyContentsError("내용을 입력해주세요.");
    }
    if (
      myWriter !== "" &&
      myPassword !== "" &&
      myTitle !== "" &&
      myContents !== ""
    ) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: myWriter,
            password: myPassword,
            title: myTitle,
            contents: myContents,
            images: myImages,
          },
        },
      });
      router.push(`/boards/${result.data.createBoard._id}`);
    }
  }

  async function onClickEdit() {
    if (!myTitle && !myContents) {
      alert("수정된 내용이 없습니다");
    }

    const myVariables: IMyVariables = {
      boardId: router.query.boardId,
      password: myPassword,
      updateBoardInput: {},
    };
    try {
      if (myTitle !== "") {
        myVariables.updateBoardInput.title = myTitle;
      }
      if (myContents !== "") {
        myVariables.updateBoardInput.contents = myContents;
      }
      const result = await updateBoard({
        variables: myVariables,
      });
      // console.log(result.data.updateBoard._id)
      router.push(`/boards/${result.data.updateBoard._id}`);
      if (
        myWriter !== "" &&
        myPassword !== "" &&
        myTitle !== "" &&
        myContents !== ""
      ) {
        if (
          myWriter.length >= 0 &&
          myPassword.length >= 0 &&
          myTitle.length >= 0 &&
          myContents.length >= 0
        ) {
          confirm("게시물을 수정하시겠습니까?“");
        }
        if (myTitle !== "") {
          myVariables.updateBoardInput.title = myTitle;
        }
        if (myContents !== "") {
          myVariables.updateBoardInput.contents = myContents;
        }
        const result = await updateBoard({
          variables: myVariables,
        });
        console.log(result.data.updateBoard._id);
        router.push(`/boards/${result.data.updateBoard._id}`);
      }
    } catch (error: any) {
      console.log(error.message);
    }
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

  function onClickMyimage() {
    fileRef.current?.click();
  }

  return (
    <BoardNewWriteUI
      myWriterUI={onChangeMyWriter}
      myPasswordUI={onChangeMyPassword}
      myTitleUI={onChangeMyTitle}
      myContentsUI={onChangeMyContents}
      mySubmitUI={onClickSubmit}
      myWriterError={setMyWriterError}
      myPasswordError={setMyPasswordError}
      myTitleError={setMyTitleError}
      myContentsError={setMyContentsError}
      myColorUI={myColor}
      isEdit={props.isEdit}
      onClickEdit={onClickEdit}
      data={data}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      myAddress={myAddress}
      myZonecode={myZonecode}
      isOpen={isOpen}
      onChangeFile={onChangeFile}
      onClickMyimage={onClickMyimage}
      myImages={myImages}
      fileRef={fileRef}
    />
  );
}
