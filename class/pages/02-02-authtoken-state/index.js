// 인증번호 6자리 "000000"과 "인증번호전송"이라는 버튼을 만들고, 버튼 클릭시 인증번호를 만들어서
// 인증번호 6자리가 변경되도록 적용해 주세요.
// 1-1) let과 document.getElementById()를 사용해 주세요.
// 1-2) state를 사용해 주세요.
import {useState} from 'react'

export default function authToken(){

        const [authToken, setAuthToken] = useState("000000") 
        function zzz(){
            setAuthToken(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"))
        }

        return(
            <>
            <div>{authToken}</div>
            <button onClick={zzz}>인증번호 전송</button>
            </>
        )

}