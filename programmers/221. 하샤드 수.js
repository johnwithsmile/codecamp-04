// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 1 이상, 10000 이하인 정수입니다.
function solution(x) {
  // 자릿수의 합의 총 값을 저장하는 변수 만듬
  let sum = 0;
  console.log(x), typeof x;
}
//이렇게 하면 숫자들이 다 들어오는걸 볼 수 있음

// 숫자 타입의 x값을 문자열 타입으로 변환
function solution(x) {
  // 자릿수의 합의 총 값을 저장하는 변수 만듬
  let sum = 0;
  x = String(x);
}

// x의 인덱스 값을 가져오기를 함 그럼 자릿수 두 숫자를 가져올 수 있음
// 그걸 반복문으로 만들고 sum에 저장시키기
// 근데 string으로 바꿔놨으니까 그냥 문자가 합쳐짐
// 그래서 다시 Number로 다시 바꿔줌
// 자릿값 합은 구함
function solution(x) {
  let sum = 0;
  x = String(x);

  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }
}

// 이제 조건식으로 true, false 를 리턴시킴, 끝
function solution(x) {
  let sum = 0;
  x = String(x);

  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }
  return x % sum === 0;
}

//forEach 메소드로 출력

function solution(x) {
  let sum = 0;
  const temp = x
    .toString() // String(x)와 같음
    .split("") // 숫자를 쪼개서 하나씩 넣어줌(문자로)
    .forEach((num) => {
      // 각각의 자릿수를 가져옴, sum에 연산된 값을 숫자로 변환해서 넣음
      sum += Number(num);
    }); //여기까지 하면 자리수의 합을 구할 수 있음
  return x % sum === 0; //나머지값이 0인지 구하는 조건을 달으면 됨
}

// reduce 메소드를 사용해보기
// reduce는 배열에만 사용할 수 있음
[1, 2, 3, 4].reduce((el, cu) => {
  console.log(el, cu);
}, 0);
//기본 reduce의 모습
//여기서는 1,2가 먼저 나오고 undefined 3, undefined 4가 나옴
// el은 초기값, cu는 다음 값을 가져옴
// 0을 추가하면 10이 나옴 
//0 1 
//1 2
//3 3
//6 4 
//1 0
// 이렇게 출력이 됨
// 이걸 잘 쓰면 편하게 풀 수 있다.
// 굳이 cu일 필요 없이 a, b여도 됨
// 여기서 리턴을 해주지 않으면 첫번째에서 undefine하고 멈추니 조심!
[1, 2, 3, 4].reduce((el, cu) => {
    console.log(el, cu)
    return el + cu
  }, 0);

//여전히 toSring으로 나온 값을 더했으므로 아래서도 숫자로 변환
function solution(x) {
    const sum = x.toString()
                 .split("")
                 .reduce((el, cu) => {
                    return Number(el) + Number(cu);
                 }, 0)
    return x % sum === 0; //나머지로 나눴을 때 0인지 아닌지 구별하기
}

