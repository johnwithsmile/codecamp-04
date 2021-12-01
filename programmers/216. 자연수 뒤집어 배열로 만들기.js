// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.
// .reverse()는 데이타의 순서를 아예 뒤집어줌
// filter 를 사용할 때 잘 사용될 수 있으니 알아두기 
function solution(n) {
    var answer = [];
    //숫자 타입의 데이터를 문자열 타입으로 변환 
    n = String(n);
    //숫자를 다시 문자로 변환
    for(let i = 0; i< n.length; i++){
        answer.push(Number(n[i]))
    }
    answer.reverse();
    return answer;
}

//리버스를 사용하지 않는 방법은 조건문을 뒤에서 시작하게 하면 됨

function solution(n) {
    var answer = [];
    //숫자 타입의 데이터를 문자열 타입으로 변환 
    n = String(n);
    //최초식
    //숫자를 다시 문자로 변환, n.length-1인 이유는 마지막 값을 가져오기위해서
    // 12345면 5의 인덱스 값은 4기때문
    // 조건식
    // 인덱스의 0번째까지  i는 계속 작아짐
    for(let i = n.length - 1; i>= 0; i--){
        answer.push(Number(n[i]))
    }
    answer
    return answer;
}

//메소드를 이용하면?
//문자열로 일단 만든다음에 
// split 으로 쪼개고
// reverse로 귀집은다음
// map으로 각각 string 으로 나온 값을 number로 바꿈

function solution(n){
    const answer = String(n)
                    .split("")
                    .reverse()
                    .map(el => {
                        return Number(el)
                    })
    return answer;
}