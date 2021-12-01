import {useState} from 'react'
//onChange={}로 값을 저장해서 나중에 백엔드로 보낼 수 있음
//on으로 시작하는 것들은 시작할 때 function 안에자동으로 event라는 것이 생성됨 
//event.target 을하게 되면 바로 <input type="text" onChange={aaa}/>를 가져옴
export default function SignupStatePage(){

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")

    function aaa(event){
        setEmail(event.target.value)

    }
    function bbb(event){
        setPassword(event.target.value)

    }
    function ccc(){
        console.log('email:' ,email)
        console.log('password:' ,password)

        if(email.includes("@") === false){
            //alert("이메일에 @가 없습니다. 잘못된 이메일입니다!")
            setEmailError("이메일에 @가 없습니다. 잘못된 이메일입니다!")
        }
    }

    return (
        <div>
            이메일입력:<input type="text" onChange={aaa}/> <br/>
            <div>{emailError}</div>
            비밀번호입력: <input type="password" onChange={bbb}/><br/>
            <button onClick={ccc}>회원가입</button>
        </div>
    )



}
