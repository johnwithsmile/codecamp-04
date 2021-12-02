// https://programmers.co.kr/learn/courses/30/lessons/12945
// 문제 설명
// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

// 예를들어

// F(2) = F(0) + F(1) = 0 + 1 = 1
// F(3) = F(1) + F(2) = 1 + 1 = 2
// F(4) = F(2) + F(3) = 1 + 2 = 3
// F(5) = F(3) + F(4) = 2 + 3 = 5
// 와 같이 이어집니다.

// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

// 제한 사항
// n은 2 이상 100,000 이하인 자연수입니다

// 피보나치수를 배열에 저장하기 그냥 숫자 넣기
// 왜냐 입력은 2 이상 이기 때문
// 이후 반복문
// i는 1씩 증가해서 n까지 나옴
// 이후 피보나치 수를 구하는 식을 구함 prev와 next사용
// prev는 현재 피보나치 위치에서 2칸 앞에 있는 데이터,
// next는 현재 피보나치 위치에서 1칸 안에 있는 데이터

// sum을 감싸는 이유는 시스템상 표시하는 숫자를 넘어섰기 때문


function solution(n) {
    const arr =[0, 1];
        for(let i = 2; i <= n; i++){
            let sum = (arr[i - 2] + arr[i - 1]) % 1234567;
            let prev = arr[i -1];
            let next = sum; 

            arr.push(sum);
    }
    return arr[n] 
}
// 메서드 풀기

function solution(n) {
    const result = new Array(n -1)
                    .fill(1)
                    .reduce( el => {
                        sum = (prev + el) % 1234567
                        prev = el
                        next = sum

                        return sum;
                    }, sum)
    return result;
}