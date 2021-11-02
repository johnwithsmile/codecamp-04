export default function authtoken(){
    
    function zzz(){
        const bbb = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("qqq").innerText = bbb
    }

    return(
            <>
            <div id= "qqq">000000</div>
            <button onClick={zzz}>인증번호 전송</button>
            </>
        )

}
