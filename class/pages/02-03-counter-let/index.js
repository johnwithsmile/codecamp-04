export default function CounterLetPage(){
    // qqq란 아이디의 텍스트를 가져와서 숫자로 바꾸고 +1을함, bbb로 정의
    // 그리고나서 qqq를 bbb로 변경
    function zzz(){
        const bbb = Number(document.getElementById("qqq").innerText) + 1
        document.getElementById("qqq").innerText = bbb
    }

    return(
            <>
            <div id= "qqq">0</div>
            <button onClick={zzz}>카운트증가!!</button>
            </>
        )

}

<div class="token__wrapper">
            <div class="token" id="token">000000</div>
            <button id="token__button" onclick="getToken()" disabled>인증번호전송</button>
        </div>
function getToken(){
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("token").innerText = token
    document.getElementById("token__button").style = "background-color: yellow; cursor: default;"
    document.getElementById("token__button").setAttribute("disabled", "true")
    document.getElementById("token__timer__confirm__button").style="background-color: yellow; cursor: pointer;"
    document.getElementById("token__timer__confirm__button").removeAttribute("disabled")
    getTokenTimer()
}

