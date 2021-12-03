import * as yup from "yup";

export const schema = yup.object().shape({
  myname: yup.string().required("상품명을 입력해주세요"),

  myremarks: yup.string().required("한줄요약을 입력해주세요"),

  mycontents: yup.string().required("상품설명을 입력해주세요"),

  myprice: yup.string().required("상품가격을 입력해주세요"),

  mytags: yup.string().required("태그를 입력해주세요"),
});
