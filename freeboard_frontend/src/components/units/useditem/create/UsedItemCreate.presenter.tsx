/* eslint-disable react/prop-types */
import Button01 from "../../../commons/buttons/01/Button01";
import Input01 from "../../../commons/inputs/Input01";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useForm } from "react-hook-form";
import { schema } from "./UsedItemCreate.validation";
export default function MyformUI(props) {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(props.onClickLogin)}>
      상품명 : <Input01 type="text" register={register("myname")} />
      <div>{formState.errors.myEmail?.message}</div>
      한줄요약 : <Input01 type="text" register={register("myremarks")} />
      <div>{formState.errors.myremarks?.message}</div>
      상품설명 : <Input01 type="text" register={register("mycontents")} />
      <div>{formState.errors.mycontents?.message}</div>
      판매가격 : <Input01 type="text" register={register("myprice")} />
      <div>{formState.errors.myprice?.message}</div>
      태그입력 : <Input01 type="text" register={register("mytags")} />
      <div>{formState.errors.mytags?.message}</div>
      거래위치 : <Input01 type="text" />
      <div>{formState.errors.myPassword?.message}</div>
      GPS : <Input01 type="text" />
      <div>{formState.errors.myremarks?.message}</div>
      주소 : <Input01 type="text" />
      <div>{formState.errors.myremarks?.message}</div>
      사진 : <Input01 type="text" register={register("myimages")} />
      <div>{formState.errors.myimages?.message}</div>
      <Button01 type="submit" name="로그인하기" isValid={formState.isValid} />
    </form>
  );
}