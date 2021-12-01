// 문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.

// 최대공약수는 두 수의 약수 중에서 제일 큰 수
// 최소 공배수는 두 수의 배수 중에서 제일 작은 수 

// 최대공약수 구하기
// 약수를 배열로 담음

function solution(n, m) {
    var answer = [];
    const gcdArr = [];
    for( let i = 1; i<= m; i ++){
        console.log(i)
    }
    return answer;
} 

// m의 길이만큼 사이값을 가져오고있음
// 공약수는 n과 m을 i로 나눴을 때 나머지가 0일때 공약수라고 할 수 있음

function solution(n, m) {
    var answer = [];
    const gcdArr = [];
    for( let i = 1; i<= m; i ++){
        if(n % i === 0 && m % i === 0){
            gcdArr.push(i)
        }
    }
    return answer;
} 

// 여기서 제일 큰수를 가져와야하니 Math.max를 사용함
// 배열인 경우는 
// a= [1,2,3,4,5,6,]
// Math.max(...a)
// 이렇게 하면 
// 가장 큰 수를 찾아서 넣어줌(최대공약수)

function solution(n, m) {
    var answer = [];
    const gcdArr = [];
    for( let i = 1; i<= m; i ++){
        if(n % i === 0 && m % i === 0){
            gcdArr.push(i)
        }
    }
    answer[0] = Math.max(...gcdArr)
    return answer;
} 

다음 최소공배수를 구해야함

function solution(n, m) {
    var answer = [];
    const gcdArr = [];
    for( let i = 1; i<= m; i ++){
        if(n % i === 0 && m % i === 0){
            gcdArr.push(i)
        }
    }
    answer[0] = Math.max(...gcdArr)

    for( let i = m; i <= n * m; i += m){
        console.log(i)
    }

    return answer;
} 
// 최소값 부터 최대값(두 수를 곱한 값)까지 나옴
// 그러고나면 i인덱스 값에서 제일 작은값 중에서 나눴을 때 0인 값을 찾는다
// 작은값은 가장 먼저 찾은 값으로 생각, 그 상태에서 반복문을 멈춤
// break를 사용

function solution(n, m) {
    const answer = [];
    const gcdArr = [];
    for( let i = 1; i<= m; i ++){
        if(n % i === 0 && m % i === 0){
            gcdArr.push(i)
        }
    }
    answer[0] = Math.max(...gcdArr)

    for( let i = m; i <= n * m; i += m){
       if(i % n === 0){
           answer[1] = i;
           break;
       }
    }

    return answer;
} 

// 코드를 줄일 수 있음
// 유클리드 호제법을 사용하면 줄일 수 있음
// a를 b로 나눴을 때 (a가 b보다 클 경우) === 큰 수에서 작은 수를 나눴을 때
// 나머지값 결과가 0이 되면 작은수가 최대공약수가 된다.
// 만약 0이되지 않으면 작은 수가 다시 큰 수가 되고 나머지 값이 작은 수가 된다.
// 계속 반복하면 나머지 값이 0이 나오면 작은수가 최대 공약수가 된다.


function solution(n, m){

    let a = m; // 큰수
    let b = n; // 작은 수
    let r = 0; // a를 b로 나눴을 때의 나머지 값이 저장
    
    while(a % b > 0){
        r = a % b
        a = b ; // 큰수에 작은 수를 할당
        b = r ; // 작은 수에 나머지 값을 할당
    } //안쪽의 식이 true일때만 실행 , 나머지값이 r에저장
   
    console.log(a, b, r)
}

// 이렇게 해보면 b가 최대공약수임
// n*m을 로 나눠주면 최소공배수를 구할 수 있음

function solution(n, m){

    let a = m; // 큰수
    let b = n; // 작은 수
    let r = 0; // a를 b로 나눴을 때의 나머지 값이 저장
    
    while(a % b > 0){
        r = a % b
        a = b ; // 큰수에 작은 수를 할당
        b = r ; // 작은 수에 나머지 값을 할당
    } //안쪽의 식이 true일때만 실행 , 나머지값이 r에저장
   
    return[b, (n * m / b)]
}
