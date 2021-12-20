import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./UsedItemCreate.queries";
import { ChangeEvent, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IUseditemWriteUIProps,
  IMyUpdateUseditemInput,
} from "./UsedItemCreate.types";

export default function BoardWrite(props: IUseditemWriteUIProps) {
  const router = useRouter();

  const [myName, setmyName] = useState("");
  const [myRemarks, setmyRemarks] = useState("");
  const [myContents, setMyContents] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [myWriterError, setMyWriterError] = useState("");
  const [myPasswordError, setMyPasswordError] = useState("");
  const [myTitleError, setMyTitleError] = useState("");
  const [myContentsError, setMyContentsError] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [createUsedItem] = useMutation(CREATE_USED_ITEM);
  const [updateUsedItem] = useMutation(UPDATE_USED_ITEM);

  function onChangeMyWriter(event: ChangeEvent<HTMLInputElement>) {
    setMyWriter(event.target.value);
    if (event.target.value !== "") {
      setMyWriterError("");
    }

    if (
      event.target.value !== "" &&
      myTitle !== "" &&
      myContents !== "" &&
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }


  function onChangeMyTitle(event: ChangeEvent<HTMLInputElement>) {
    setMyTitle(event.target.value);
    if (event.target.value !== "") {
      setMyTitleError("");
    }

    if (
      myWriter !== "" &&
      event.target.value !== "" &&
      myContents !== "" &&
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setMyContents(event.target.value);
    if (event.target.value !== "") {
      setMyContentsError("");
    }

    if (
      myWriter !== "" &&
      myTitle !== "" &&
      event.target.value !== "" &&
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

  function onClickAddressSearch() {
    setIsOpen(true);
  }

  function onCompleteAddressSearch(data: any) {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  }

  async function onClickSubmit() {
    if (!myName) {
      setMyWriterError("작성자를 입력해주세요.");
    }
    if (!myRemarks) {
      setMyPasswordError("비밀번호를 입력해주세요.");
    }
    if (!myContents) {
      setMyTitleError("제목을 입력해주세요.");
    }
    if (!myPrice) {
      setMyContentsError("내용을 입력해주세요.");
    }
    if (myName && myRemark && myContents && myPrice) {
      const result = await createUsedItem({
        variables: {
          createBoardInput: {
            name: myName,
            remarks: myRemarks,
            contents: myContents,
            price: Number(data.myPrice),
            tags: data.mytags,
            boardAddress: {

              zipcode: zipcode,
              address: address,
              addressDetail: addressDetail,
            },
            images: fileUrls,
          },
        },
      });
      router.push(`/useditems/${result.data.createBoard._id}`);
    }
  }

  async function onClickUpdate() {
    if (
      !myTitle &&
      !myContents &&
      !youtubeUrl &&
      !address &&
      !addressDetail &&
      !zipcode
    ) {
      alert("수정된 내용이 없습니다.");
      return;
    }

    const myUpdateboardInput: IMyUpdateUseditemInput = { images: fileUrls };
    if (myTitle) myUpdateboardInput.title = myTitle;
    if (myContents) myUpdateboardInput.contents = myContents;
    if (youtubeUrl) myUpdateboardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      myUpdateboardInput.boardAddress = {};
      if (zipcode) myUpdateboardInput.boardAddress.zipcode = zipcode;
      if (address) myUpdateboardInput.boardAddress.address = address;
      if (addressDetail)
        myUpdateboardInput.boardAddress.addressDetail = addressDetail;
    }

    try {
      await updateUsedItem({
        variables: {
          boardId: router.query.boardId,
          password: myPassword,
          updateBoardInput: myUpdateboardInput,
        },
      });
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  return (
    <BoardWriteUI
      myWriterError={myWriterError}
      myPasswordError={myPasswordError}
      myTitleError={myTitleError}
      myContentsError={myContentsError}
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyTitle={onChangeMyTitle}
      onChangeMyContents={onChangeMyContents}
      onChangeMyYoutubeUrl={onChangeMyYoutubeUrl}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      isActive={isActive}
      isEdit={props.isEdit}
      isOpen={isOpen}
      data={props.data}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      fileUrls={fileUrls}
    />
  );
}
