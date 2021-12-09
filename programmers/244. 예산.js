// https://programmers.co.kr/learn/courses/30/lessons/12982

// S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다. 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다. 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.

// 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다. 예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.

// 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
// d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
// budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.

function solution(d, budget) {
  const answer = [];
  for (let i = 0; i < d.length; i++) console.log(d[i]);
}

// answer배열안에 담아줌, 그리고 for문을 쓰면 각각 지원한 부서의 금액이 나옴
// 근데 하기 전에 가장 낮은 지원금부터 오름차순으로 정렬함

function solution(d, budget) {
  const answer = [];
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) console.log(d[i]);
}

// 부서들이 신청한 금액의 총 합을 sum 이라고 하고 부서들의 금액을 더함

function solution(d, budget) {
  const answer = [];
  d.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];

    console.log(sum, budget);
  }
}
// 이렇게 되면 총합과 예산이 하나씩 출력됨

function solution(d, budget) {
  const answer = [];
  d.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum <= budget) {
      answer.push(d[i]);
    }
  }
  return answer.length;
}
// 그럼 예산이 총합보다 적을경우에 answer에 하나씩 push함
// 그리고나서 길이를 출력하면 최대 지원할 수 있는 부서의 개수가 나옴

// 메소드로 풀기
// sort로 오름차수 정렬을 함
// 필터로 budget이 0보다 크거나 작을 떄 리턴시킴

function solution(d, budget) {
  const answer = d
    .sort((a, b) => a - b)
    .filter((price) => {
      // budeget = budget - price
      // 총 예상에서 해당 지원금을 삭감 하는 것
      budget -= price;
      if (budget >= 0) {
        return price;
      }
    });
  return answer.length;
}
