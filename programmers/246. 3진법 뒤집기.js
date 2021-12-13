// https://programmers.co.kr/learn/courses/30/lessons/68935

// 문제 설명
// 자연수 n이 매개변수로 주어집니다.n을 3진법 상에서 앞뒤로 뒤집은 후,
// 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 100,000,000 이하인 자연수입니다.

function solution(n) {
  let answer = 0;
  return answer;
}

// 1. 숫자를 10진법에서 3진법으로 바꿈
// 진법을 바꾸는 메서드는

// a = 123
// a.toString()하면 문자값이됨
// 만약
// a.toString(3)하면 숫자를 3진법으로 바꾼 문자타입의 데이터가 나오게됨
// 숫자도 마찬가지로 바꿔서 그에맞는 진법으로 바꿀 수 있음

function solution(n) {
  n = n.toString(3);
  console.log(n);
}
// 이렇게하면 10진법의 수를 3진법으로 출력해서 볼 수 있음

// reverse라는건 만들어서 반대로 for문을 돌림

function solution(n) {
  n = n.toString(3);
  console.log(n);
  let reverse = "";
  for (let i = n.length - 1; i >= 0; i--) {
    console.log(n[i], i);
  }
}

// 여기서 i 값을 보면 인덱스값이 하나씩 내려가는 것을 볼 수 있음
// 거기에 n의 i번째 인덱스라고하면 뒤에서부터 가져오는 것임
// 그럼 현재 n의 값이 toString을써서 문자값이기때문에

function solution(n) {
  n = n.toString(3);
  console.log(n);
  let reverse = "";
  for (let i = n.length - 1; i >= 0; i--) {
    reverse += n[i];
  }
  console.log(n, reverse);
}

// 이렇게하면 뒤집은 값이 나오게됨
// 그럼 진법만 바꾸면 되니까 다시 toString(10)
// 근데 안되고 변경된 3진법을 다시 10진법에 넣으면 자신만 출력됨

// 이럴려면 다른 메서드를 사용해야함
// parseInt("바꿀대상", 진법)
//  return parseInt(reverse, 3);
// 뒤집은 대상이 3진법으로 표현되고 있다고 하면 다시 돌아오게됨

function solution(n) {
  n = n.toString(3);
  console.log(n);
  let reverse = "";
  for (let i = n.length - 1; i >= 0; i--) {
    reverse += n[i];
  }
  return parseInt(reverse, 3);
}

// 요약하면 진법은 toStringrhk pasrseInt를 사용하면 풀 수 있음

// 메서드를 이용하면?
// 3진법 만들고 배열로 만듬
// 배열의 앞뒤를 바꿔주는 메서드가 있음 .reverse
// 이 배열을 문자열형태로 만듬.join
// 그리고나서 parseInt, (3진법으로 표현되고있으니까)

// 끝 ;;

function solution(n) {
  n = n.toString(3).split("").reverse().join("");

  return parseInt(n, 3);
}
