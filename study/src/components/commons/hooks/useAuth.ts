import {useEffect, useState } from "react";
import { useRouter } from "next/router";

export function useAuth(){
    const router = useRouter();
    const [isMyLoading, setIsMyLoading] = useState(true);

    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
          alert("로그인한 사람만 입장가능합니다!! 로그인을 먼저해주세요!!");
          router.push("/23-04-login");
        } else {
            setIsMyLoading(false)
        }
      }, []);
    // 키와 밸류가 같아서 생략함
      return{
          isLoading : isMyLoading
      }


}