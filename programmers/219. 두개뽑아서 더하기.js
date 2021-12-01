// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.
//조건문 안에 조건문을 넣어서 자기 자신을 제외한 숫자를 가져오게 함(l은 i+1)
// 이후 sum을 만들어서 i번째 인덱스와 l 번째 인덱스를 더함
// 중복되면 배열에 넣지 않고 새로울 때 넣기 위해서 indlues 활용, 있으면 true, 없으면 false 반환함
// 이후 오름차순 정렬은 맨 마지막에서 함

function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let l = i + 1; l < numbers.length; l++) {
      const sum = numbers[i] + numbers[l];

      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}

// 중복을 체크하지 않고 배열에 푸쉬를 하면 중복이 자동으로 제거가 되는 기능이 있음
// new set()을 사용할 수 있음
// a = new Set(1,2,3,4,)
// a.add(5)
// a.add(6)
// a.add(1) //1이라는 데이터가 이미 있어서 들어가지 않음
// a.has() // 로 include와 같은 기능으로 활용할 수 있음
// 배열형태를 가지지만 타입은 객체(object)의 성격을 가지고 있음 그래서 배열로 변환을 해야함
// Array.from(a)를 넣으면 복사한다음 배열로 바꿔주는 기능임
// 중복처리할때는 이용되지만 실무에서는 사용되지 않을 가능성이 높음
// 근데 알고리즘에서는 이렇게 하는게 편하긴 함

function solution(numbers) {
  var answer = new Set([]);

  for (let i = 0; i < numbers.length; i++) {
    for (let l = i + 1; l < numbers.length; l++) {
      const sum = numbers[i] + numbers[l];

      answer.add(sum);
    }
  }
  answer = Array.from(answer);
  return answer.sort((a, b) => a - b);
}

// 메소드 방식으로 풀기
// 이미 배열이기 때문에 forEach를 쓰면됨
// 근데 자기 자신을 제외해야되서 slice를 사용함, i+1, numbers의 길이까지
// 그걸 다시 foreach를 실행
// 결과를 sum에 담아줌
// 중복값 체크

function solution(numbers) {
  const answer = new Set([]);

  numbers.forEach((num1, i) => {
    numbers.slice(i + 1, numbers.length).forEach((num2) => {
      const sum = num1 + num2;
      answer.add(sum);
    });
  });
  return Array.from(answer).sort((a, b) => a - b);
}
