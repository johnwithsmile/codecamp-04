import MyformUI from "./UsedItemCreate.presenter";
import { FormValues } from "./UsedItemCreate.types";

export default function UsedItemsCreatePage() {
  function onClickLogin(data) {
    console.log(data);
    // loginUser API 요청하기!!
  }

  return <MyformUI onClickLogin={onClickLogin} />;
}

// (data: FormValues)
