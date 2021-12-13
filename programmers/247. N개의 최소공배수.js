// https://programmers.co.kr/learn/courses/30/lessons/12953

// 두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

// 제한 사항
// arr은 길이 1이상, 15이하인 배열입니다.
// arr의 원소는 100 이하인 자연수입니다.

// arr로 여러개의 숫자를 받아오는데 제일 큰 숫자를 찾아온다음
// 큰 수의 배수 중에서 나누어 떨어진다면 그때 공통배수라고 침

// Math.max를 쓰고 배열이니까 스프레드 연산자를 씀

function solution(arr) {
  const biggest = Math.max(...arr);
}

// 이후 가장 큰 수를 안의 숫자들로 나눴을 때 0으로 떨어지는 경우를 찾음 = 배수
// 반복은 큰수를 자신만큼 더해서 자신을 배수로 진행되게 함 = 공배수
// 이후 0일 때 멈추면 공배수 중에서 가장 작은게 나옴 = 최소 공배수

// 값이 나올때까지니까 while문을 사용함, 조건식이 true일때만 작동함
// check 라는 애를 true로 둬서 안의 숫자들이 모두 나눠지지 않는다면 공배수가 안되니까
// 조건문에 check = false라고 넣음
// 그리고 나누어 떨어지지 않으면 더이상 조건문을 실행시킬 필요가 없으니 break로 반복문을 멈춤

// 이후 check가 true라면 공배수로 나온것.
// 바로 걍 반환하면됨

// 아니라면 그냥 제일 큰 수를 다시 본인을 더하게 함 sum += biggest;
// 그러면 다시 while문으로 돌아감

// 그럼
// false 큰값
// false 큰값 * 2
// false 큰값 * 3
// false 큰값 * 4
// 다 나올때까지 쭉 반복함

function solution(arr) {
  const biggest = Math.max(...arr);
  let sum = biggest;
  while (true) {
    let check = true;
    for (let i = 0; i < arr.length; i++) {
      if (sum % arr[i] !== 0) {
        check = false;
        break;
      }
    }
    if (check) {
      return sum;
    }
    sum += biggest;
  }
}

// 유클리드 호제법으로도 풀 수 있음
function solution(arr) {
  const answer = arr.reduce((acc, cur) => {
    // 유클리드 호제법
    // 큰 수에서 작은 수를 나눴을 때 나머지가 0이면 작은 수가 최대공약수

    const recursive = (min, max) => {
      return min % max === 0 ? max : recursive(max, min % max);
    };

    // 최소공배수는 두 수를 곱한 값에 최대공약수를 나눈 값
    return (acc * cur) / recursive(acc, cur);
  });
  return answer;
}
