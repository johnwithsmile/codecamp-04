import MyformUI from "./UsedItemCreate.presenter";
import { useRouter } from "next/router";
import { FormValues } from "./UsedItemCreate.types";
import { CREATE_USED_ITEM } from "./UsedItemCreate.queries";
import { useMutation } from "@apollo/client";
export default function UsedItemsCreatePage() {
  const [createUsedItem] = useMutation(CREATE_USED_ITEM);
  const router = useRouter();

  async function onClickSubmit(data: FormValues) {
    const result = await createUsedItem({
      variables: {
        createUseditemInput: {
          name: data.myname,
          remarks: data.myremarks,
          contents: data.mycontents,
          price: Number(data.myprice),
          tags: data.mytags,
          // boardAddress: {
          //   zipcode: zipcode,
          //   address: address,
          //   addressDetail: addressDetail,
          // },
          // images: fileUrls,
        },
      },
    });
    router.push(`/useditems/${result.data.createUseditem._id}`);
  }
  return <MyformUI onClickSubmit={onClickSubmit} />;
}
