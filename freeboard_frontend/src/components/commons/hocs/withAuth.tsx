import { useEffect } from "react";
import { useRouter } from "next/router";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("myAccessToken")) {
      alert("로그인 한 사람만 입장 가능합니다!! 로그인을 먼저 해주세요");
      router.push("/registration/signin");
    }
  }, []);

  return <Component {...props} />;
};
