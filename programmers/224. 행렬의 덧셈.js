// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행,
// 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아,
// 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

function solution(arr1, arr2) {
  var answer = [[]];

  for (let i = 0; i < arr1.length; i++) {
    for (let l = 0; l < arr1[i].length; l++) {
      const sum = arr1[i][l] + arr2[i][l];

      if (answer[i] === undefined) {
        answer[i] = [];
        //배열이 비어있다면 강제로 배열을 추가
      }

      answer[i][l] = sum;
    }
  }
  return answer;
}

//메소드로 풀기
//map 을 이용, map 안의 map을 이용
// 배열을 리턴하니까 이중배열로 리턴하게 되고 같은 행과 같은 열로 나온 값이 이중배열로 나옴
// 그 이중배열값을 더하면 됨

function solution(arr1, arr2) {
  const answer = arr1.map((num1, i) => {
    return num1.map((num2, l) => {
      return num2 + arr2[i][l];
    });
  });
  return answer;
}
