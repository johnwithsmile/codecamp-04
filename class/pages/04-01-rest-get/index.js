import axios from 'axios' //rest api 기능 사용하기
import {useState} from 'react' // state 기능 사용하기

export default function RestGetPage(){ //restgetpage 정의
    const[aaa, setAaa] = useState("안녕하세요") //state 사용, 

    //만약 화살표함수라면
    // const zzz = async() => {
    //     await axios.get("")
    // }

    async function zzz(){ //async와 awaitㅋ쓰기
        const result = await axios.get('https://koreanjson.com/users')  //사이트의 1번포스트 불러오기
        console.log(result)     

        // setAaa(result)
    }

    return(
        <>
        <div>{aaa}</div>
        <button onClick={zzz}>REST-API 요청하기!!</button>
        </>
    )
}