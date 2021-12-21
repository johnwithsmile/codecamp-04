import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import UsedItemCreateUI from "./UsedItemCreate.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./UsedItemCreate.queries";

export default function ItemNew() {
  const router = useRouter();
  const [myInputs, setMyInputs] = useState({
    name: "",
    remarks: "",
    contents: "",
    price: 0,
  });

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const onChangeMyInputs = (event) => {
    setMyInputs({
      name: myInputs.name,
      remarks: myInputs.remarks,
      contents: myInputs.contents,
      price: myInputs.price,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeMyInputsPrice = (event) => {
    setMyInputs({
      name: myInputs.name,
      remarks: myInputs.remarks,
      contents: myInputs.contents,
      price: Number(event.target.value),
    });
  };

  const onClickSubmit = async () => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: { ...myInputs },
        },
      });
      router.push(`/items/${result.data.createUseditem._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ItemNewUI
      myInputs={onChangeMyInputs}
      onClickSubmit={onClickSubmit}
      myInputsPrice={onChangeMyInputsPrice}
    />
  );
}
