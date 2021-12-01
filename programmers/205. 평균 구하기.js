// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

//평균은 전체 인덱스를 다 더한 이후에 인덱스 수만큼 나누는 것
//배열의 하나하를 다 가져와서 더함
//그리고 배열.length 만큼 나누기

function solution(arr){
    let sum = 0;

    for (let i =0 ; i< arr.length; i++){
        sum = sum + arr[i];
    }
    return sum /arr.length;
}