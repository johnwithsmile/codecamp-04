/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  // const { accessToken } = useContext(GlobalContext);
  useEffect(() => {
    // console.log(myAccessToken, accessToken);
    if (!localStorage.getItem("refreshToken")) {
      alert("로그인 한 사람만 입장 가능합니다!! 로그인을 먼저 해주세요");
      router.push("/registration/signin");
    }
  }, []);

  return <Component {...props} />;
};
