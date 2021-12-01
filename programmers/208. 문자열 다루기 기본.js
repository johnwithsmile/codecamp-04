// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
//예외처리는 항상 먼저

function solution(s) {
    if(s.length !== 4 && s.length !== 6){
        return false
    }

    var answer = true;
    for(let i=0; i < s.length; i++){
        if(isNaN(s[i]) === true ){
        //Number타입으로 변환했을 때 문자열인경우 true값 반환
        answer = false;
        break; //반복문을 강제로 종료
        }
    }

    return answer;
}

// isNaN은 숫자인지 아닌지 판별해줌 (Not a Number) 문자면 true 숫자면 false
// 문자열 데이터에 숫자가 들어와도 알아서 변환해줌/ 숫자안에 문자가 있어도 판별
//Number('a') -> 값이안나옴
//Number('123') -> 값이 나옴 
// 이런 방식으로 검사해서 문자열인지 숫자열인지 판별

//filter 사용해보기
function solution(s) {
    if(s.length !== 4 && s.length !== 6){
        return false
    }

    const answer = s.split("") // 문자열을 바꿈
                    .filter(num => {
                        //데이터가 숫자가 아닌 문자타입만 남긴다.
                        //NaN값인 데이터만 남긴다
                        return isNaN(num)
                    })
    return answer.length === 0

}