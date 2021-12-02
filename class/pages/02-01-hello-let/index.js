export default function HelloLetPage(){

    function zzz(){
        document.getElementById("qqq").innerText = "반갑습니다"
    }

    // 위에는 자바스크립트, 아래는 html영역
    // JSX에서는 자바스크립트를 쓸 때는 onClick={함수이름}으로 불러옴
    // 나머지는html처럼 "그냥문자열"
    return(
            <>
            <div id= "qqq">안녕하세요</div>
            <button onClick={zzz}>버튼클릭!!</button>
            </>

        )

}

