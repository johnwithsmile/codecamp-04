// 1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.

// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야하는지 반환하는 함수, solution을 완성해 주세요. 단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.

// 제한 사항
// 입력된 수, num은 1 이상 8000000 미만인 정수입니다.

//for문으로 풀기
// 500번 반복, i카운트 증가 , count도 같이 하나씩 증가
// 짝수인경우를 먼저 찾음, %2 ===0
function solution(num) {
  let count = 0;
  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      break; //for문을 중단시킴
    }
    count++;
    if (num % 2 === 0) {
      num = num / 2;
    } else if (num % 2 === 1) {
      num = num * 3 + 1;
    }
  }
  return num !== 1 ? -1 : count;
}
//3항연산자 사용으로 줄이기
// break 사용을 잊지말자

function solution(num) {
  let count = 0;
  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      break; //for문을 중단시킴
    }
    count++;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  }
  return num !== 1 ? -1 : count;
}

//밑에 3항 연산자를 쓰지 않고 쓰기
function solution(num) {
  let count = 0;
  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      return count; //1이면 여기서 끝내고
    }
    count++;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  }
  return -1; // 끝나지 않았다면 -1이 나옴
}

// while문사용
// while문이란
let = 0;
for (let i = 0; i < 5; i++) {
  a++;
}
// a는 5가 나옴
// while문으로 하면
//조건식이 트루일때까지만 실행됨
let a = 0;
while (a !== 5) {
  a++;
}
//같은 a가 5가 나옴
// i 값을 안만들고 a를 이용해서 조건을 달 수 있음
// 정해진 횟수가 있을 때는 for문, 답이 나올 때 까지면 while로 쓰는 것이 좋음

function solution(num) {
  let count = 0;

  while (num !== 1) {
    if (count >= 500) {
      return -1;
    }
    count++;

    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  }
  return count;
}
//메서드방식
//브레이크나 리턴이 없음

function solution(num) {
  let count = 0;

  const arr = new Array(500) //길이가 500인 빈 배열 만들기
    .fill(1) //안쪽 데이터를 1로 채워줌
    .forEach((_) => {
      if (num !== 1) {
        count++;
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
      }
    }); // forEach로 for문돌리기, _는 데이터는 안쓸껀데 인자값은 넘기겠다
  return num === 1 ? count : -1;
}
