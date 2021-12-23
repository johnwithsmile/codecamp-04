import { useMutation } from "@apollo/client";
import ProductWriteUI from "./UsedItemCreate.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./UsedItemCreate.queries";
import { useState, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { IUseditemCreateProps } from "./UsedItemCreate.types";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ProductWrite(props: IUseditemCreateProps) {
  const router = useRouter();

  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  // const router = useRouter();
  const [myName, setMyName] = useState("");
  const [myRemarks, setMyRemarks] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myPrice, setMyPrice] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  function onChangeMyName(event: ChangeEvent<HTMLInputElement>) {
    setMyName(event.target.value);

    if (
      event.target.value !== "" &&
      myName !== "" &&
      myRemarks !== "" &&
      myContents !== "" &&
      myPrice !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyRemarks(event: ChangeEvent<HTMLInputElement>) {
    setMyRemarks(event.target.value);

    if (
      event.target.value !== "" &&
      myName !== "" &&
      myRemarks !== "" &&
      myContents !== "" &&
      myPrice !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyContents(event: ChangeEvent<HTMLInputElement>) {
    setMyContents(event.target.value);

    if (
      event.target.value !== "" &&
      myName !== "" &&
      myRemarks !== "" &&
      myContents !== "" &&
      myPrice !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyPrice(event: ChangeEvent<HTMLInputElement>) {
    setMyPrice(event.target.value);

    if (
      event.target.value !== "" &&
      myName !== "" &&
      myRemarks !== "" &&
      myContents !== "" &&
      myPrice !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeFileUrls(fileUrl: string, index: number) {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  }

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  async function onClickSubmit() {
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: myName,
          remarks: myRemarks,
          contents: myContents,
          price: Number(myPrice),
          images: fileUrls,
          useditemAddress: {
            zipcode: zipcode,
            address: myAddress,
            addressDetail: addressDetail,
          },
        },
      },
    });
    router.push(`/market`);
  }

  async function onClickUpdate() {
    const myUpdateUseditemInput = {
      name: myName,
      remarks: myRemarks,
      contents: myContents,
      price: Number(myPrice),
      images: fileUrls,
      useditemAddress: {
        zipcode: zipcode,
        address: myAddress,
        addressDetail: addressDetail,
      },
    };

    try {
      await updateUseditem({
        variables: {
          useditemId: router.query.useditemId,
          updateUseditemInput: myUpdateUseditemInput,
        },
      });
      router.push(`/market/${router.query.useditemId}`);
    } catch (error) {
      alert("오류다");
    }
  }

  function handleChange(value: string) {
    console.log(value);
  }

  const handleComplete = (data: any) => {
    setMyAddress(data.address);
    setIsOpen((prev) => !prev);
  };
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

  return (
    <ProductWriteUI
      onChangeMyName={onChangeMyName}
      onChangeMyRemarks={onChangeMyRemarks}
      onChangeMyContents={onChangeMyContents}
      onChangeMyPrice={onChangeMyPrice}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      onClickSubmit={onClickSubmit}
      data={props.data}
      isEdit={props.isEdit}
      isOpen={isOpen}
      onClickUpdate={onClickUpdate}
      handleChange={handleChange}
      onToggleModal={onToggleModal}
      myAddress={myAddress}
      handleComplete={handleComplete}
      onChangeAddressDetail={onChangeAddressDetail}
    />
  );
}
