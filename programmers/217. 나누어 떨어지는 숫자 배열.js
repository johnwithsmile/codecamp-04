// 문제 설명
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.

//항상 입출력 예를 보고 나서 생각하면 좋을것임
// 조건식은 arr의 길이만큼 i로 만들고 arr의 i 번째를 계속 불러옴, arr의 길이만큼.
//나머지 값을 출력하는 % 를 이용
//나머지가 0 일때만 가져옴
//그리고 answer.push(arr[i]로 나누어 떨어진 값을 i에 넣는다
// 3항연산자를 사용 예외처리, 빈 배열 를 찾고, ?[-1] 로 출력
// 아닌경우는 : 로 출력
// 오름차순으로 정렬, 숫자의 경우는 오름차순/내림차순 지정 안해주면 앞의 숫자만 비교하기 때문에 지정해야됨
// 데이터가 있을 경우 오름차순으로 정렬해서 리넡하게함

function solution(arr, divisor){
    const answer =[];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % divisor === 0){
            answer.push(arr[i])
        }
    }
    return answer.length === 0
        ? [-1]
        : answer.sort((a, b) => a - b)
}

// 메서드를 사용해서 풀기
// filter를 씀 , 숫자를 하나씩 가져옴
// return 값을 num으로 나눈 뒤 divisor 로 나눴을 때 나머지가 0인 것만 가져옴
// 3항연산자 사용
// 만약 나머지 0인게 없으면 = .length === 0 이면
// ? [-1] 을 출력 (예외처리)
// : 아니라면
function solution(arr, divisor){
    const answer = arr.filter(num => {
        return num % divisor === 0 
    })

    return answer. length === 0
    ?[-1]
    : answer.sort((a,b) => a -b)    
}