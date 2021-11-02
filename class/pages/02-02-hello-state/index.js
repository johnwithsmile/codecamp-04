import {useState} from 'react'
//리액트로부터 useState를 가져와야함
//아래 {}로 감싸야 자바스크립트인지를 이해함
//초기값으로 안녕하세요를 qqq로 저장
//화면 바꾸는 코드를 따로 안만들어도됨, 데이터만 바꾸면 바뀜
export default function HelloStatePage(){

        const [qqq, setQqq] = useState("안녕하세요")
        function zzz(){
            setQqq("반갑습니다")
        }
        return(
            <>
            <div>{qqq}</div> 
            <button onClick={zzz}>버튼클릭!!</button>

            </>
        )

}