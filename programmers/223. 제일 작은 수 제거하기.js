// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수,
// solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

// 배열 안에서 가장 작은 값 찾기, 초기값 설정, min 을 만들기
// i 가 1인부터는 0번일경우 i와 min이 같기때문에 비교할필요가 없음

function solution(arr) {
  const answer = [];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i], min);
  }
  return answer;
}
// i인덱스 값과 min을 가져옴
// 이제 비교해서 작다고 판단되면 min보다 작은 값이 있으니까 그걸 가져오게 하면 됨

function solution(arr) {
  const answer = [];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return answer;
}

// arr[i]에서 min보다 작은 수가 발견될 경우 min에 저장됨
// 일단 작은 수는 가져왔으니 작은수는 제거하고 나머지 데이터를 가져와서 리턴시키면 됨
// for문을 사용해보자
// 여기서 동일하지 않은 값만 새로운 배열에 넣어주면됨
// 그리고 마지막 리턴 부분에 길이가 0이면 -1을 출력하고 아니면 answer를 출력
function solution(arr) {
  const answer = [];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer;
}

// 코드를 줄여보기
// Math.min(6, 4, 3, 2,) 을 사용하면 제일 작은 값만 가져옴
// 반대로는 Math.max 가장 큰 수를 가져옴
// 근데 배열은 가져오지 못함 -> NaN을 가져옴
// 그래서 배열을 가져오고 싶다면
// a =[1, 2, 3, 4, 5]
// Math.min(...a) 이럼 가져올 수 있게 되서 for문을 사용안해도됨

function solution(arr) {
  const answer = [];
  const min = Math.min(...arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer;
}

// 메서드 사용해보기
// Math.min만 사용해도 가장 작은 값을 가져올 수있음
// arr을 filter로 돌려서 조건식에 해당되는 값만 가져옴(제일 작은 숫자가 아닌 것만)
// 그리고나서 빈배열의 예외처리까지 하면됨

function solution(arr) {
  const answer = [];
  const min = Math.min(...arr);

  const answer = arr.filter((num) => {
    return num !== min;
  });
  return answer.length === 0 ? [-1] : answer;
}
