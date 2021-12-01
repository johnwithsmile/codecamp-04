function solution(n){
    let answer = 0;

    console.log(n)

    return answer;

}

console.log(n) //n에 뭐가 들어오는지 봄
console.log(typeof n) //n의 타입을 봄
//이후 인덱스 값을 가져오게 해야함
// 숫자 타입의 n을 문자열 타입으로 변환
// String(n) 도 되고 n.toString()도 됨 <- 이건 변수로 지정해줘야함
// n = n.toString
// type of 로 확인해보면 문자열이라는 것을 볼 수 있음
// 이후 조건문 추가
// 근데 answer += n[i]; 이러면 또 문자열로 되서 숫자가 안합쳐지고 붙어서 나오게됨
// Number로 바꿔서 넣어줘야함

function solution(n){
    n = String(n);
    let answer = 0;

    for(let i= 0; i< n.length; i++){
        answer += Number(n[i]);
    }
    return answer;

}

//메서드를 이용하면??
//split을이용해 배열로 만들어줌
//forEach 배열을 늘어놓음
function solution(n){
    let answer = 0;
    
    String(n)
        .split("")
        .forEach(num => {
            answer += Number(num);
        })
        return answer;
}

