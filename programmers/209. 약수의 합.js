// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.


function solution(n) {
    var answer = [];
    for(let i = 0; i <=n ; i++){
        if(n%i ===0){
           answer.push(i);
        }
    }
    var sum = answer.reduce((a,b)=> a + b,0);
    return sum;
}

//약수부터 구하기
//1부터 최대값까지 출력하는 함수 출력)
function solution(n){
    let answer = 0;

    for(let i =1; i <= n; i++ ){
        console.log(i)
    }
    return answer;
}

//1부터 최대값까지 스스로 나눴을 때 나머지가 없는 값을 만들기 = 약수
function solution(n){
    let answer = 0;

    for(let i =1; i <= n; i++ ){
        if(n % 1 === 0 ){
           console.log(n,1)
       }
    }
    return answer;
}
// 12나누기 1,2,3,4,5,~12까지 하는 함수

//함수를 구했으면 그 값을 하나씩 더하기
function solution(n){
    let answer = 0;

    for(let i =1; i <= n; i++ ){
       if(n % 1 === 0 ){
           answer += i;
       }
    }
    return answer;
}

//메소드를 이용한 방식으로 풀기
// Array는 빈 배열을 만들을 만들어줌 //배열의 데이터는 undefined값이지만 번호는 있음
// Array(n) n의 갯수만큼 추가해줌
// fill은 배열을 안의 숫자로 바꿔줌 fill(1)
// forEach for문을 사용하기 위한 메서드, 

function solution(n){
    let answer = 0;

    new Array(n)
    .fill()
    .forEach( (num, i) => {
        if(n % (num +i) === 0 ){
            answer += (num + i)
        }
    })
    return answer;
}
