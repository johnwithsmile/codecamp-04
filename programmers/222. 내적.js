// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다.
// a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다.
// (n은 a, b의 길이)

// 제한사항
// a, b의 길이는 1 이상 1,000 이하입니다.
// a, b의 모든 수는 -1,000 이상 1,000 이하입니다.

// 일반적인 내적은 쌓아서 넣는다라고 생각하면 쉽다.(여기서는 조금 다름)
// a와 b에서 동일한 인덱스 번호의 곱한다음 그다음 인덱스 번호를 더하는 것
// a나 b나 동일한 인덱스 번호 반복이기 때문에 a나 b 아무거나 조건을 넣어도 됨

function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    console.log(a[i], b[i]);
  }
}
// 이렇게 하면 동일한 값을 가져옴

function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
// 이렇게하면 곱한 값을 하나씩 더하는게 됨 끝

//메소드
function solution(a, b) {
  const answer = a.map((num, i) => {
    console.log(num, i);
  });
}
// 하나씩 올라가는 값과 서로 가지고 있는 인덱스 값이 출력됨
function solution(a, b) {
  const answer = a.map((num, i) => {
    console.log(num, b[i]);
  });
}
//이렇게 하면 b의 인덱스 값도 가져올 수 있음

function solution(a, b) {
  const answer = a.map((num, i) => {
    return num * b[i];
  });
  console.log(answer);
}
// 서로 곱한 값이 배열로 추가됨 , 배열 안의 숫자들을 더하기만 하면됨
// 연산된 결과를 리턴할때는 reduce를 쓰면 좋다

function solution(a, b) {
  const answer = a
    .map((num, i) => {
      return num * b[i];
    })
    .reduce((el, cu) => {
      return el + cu;
    }, 0);
  return answer;
}

// el과 cu를 더해서 answer에 넣기 떄문에 이러면 완성!

//reduce만 사용해서 풀기

function solution(a, b) {
  const answer = a.reduce((el, cu, i) => {
    return el + cu * b[i];
  }, 0);
  return answer;
}
//이렇게 곱한 값을 바로 el과 더해서 출력할 수 있음
// 첫번째 인자값은 요소들을 가져오고 그다음으로는 인덱스 값을 반환함 mdn을 참고하면서 콩부...!
// cu 는 a의 요소들을 가져옴, el은 앞에서 연산된 결과가 항상 더해짐 거기서 i를 추가해서
// reduce에서는 4개의 인자값을 가져올수 있음, i는 현재 인덱스를 이야기하는 인자값임
// b의 i 인덱스 값을 cu로 곱하고 el에 그 값을 더해야 누적이 됨
