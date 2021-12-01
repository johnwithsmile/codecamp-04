
// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.


// for문사용해서 풀어보기
//n의 길이만큼 늘어나고
// 거기서 늘어난 값에 x를 곱해줌..

function solution(x, n) {
    const answer = [];

    for(let i= 1; i <= n; i++){
        answer.push(i * x)
    }

    return answer;
}

//메소드를 사용하면?
//먼저 배열을 만들어줌 New Array(n) 하면 그만큼 빈 배열이 만들어짐
//.fill(1)로 채워주면 n만큼 길이의 1이 채워짐
//map을 사용해서 num(배열의 요소), i(인덱스값)을 가져옴
//map을 쓸 때는 return 을 해줘야함
//거기에 x값을 곱해주면 .. 배수를 구할 수 있음
//console.log((num + i)*x) 를 return으로 바꿔줌
function solution(x, n){
    const answer = new Array(n)
                        .fill(1)
                        .map((num, i) =>{
                            return(num + i)*x
                        })

    return answer;

}