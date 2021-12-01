// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.

function solution(n) {
  let answer = -1;
  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      //제곱근을 찾은 경우(제곱의 값이 n과 동일한 경우)
      answer = i + 1;
      return answer * answer;
    }
    //제곱긍늘 찾지 못한 경우(-1을 리턴)
    return answer;
  }
}
//while문 사용하기
function solution(n) {
  let num = 1;

  while (num * num < n) {
    num++;
  }
  return num * num === n ? (num + 1) * (num + 1) : -1;
}
// 메소드 활용 방식
// Number.isInteger 정수인지 아닌지 확인해주는기능
function solution(n) {
  let sqrt = Math.sqrt(n);
  if (Number.inInteger(sqrt)) {
    // true인 경우는 제곱근인경우(=정수인경우)
    sqrt++;
    return sqrt * sqrt;
  } else {
    //false인 경우는 제곱근이 아닌 경우
    return -1;
  }
}
function solution(n) {
  return Number.isInteger(Math.sqrt(n))
    ? (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1)
    : -1;
}
