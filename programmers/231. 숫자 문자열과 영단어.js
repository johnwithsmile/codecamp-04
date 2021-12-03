숫자 문자열과 영단어
문제 설명
img1.png

네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"
이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

숫자	영단어
0	zero
1	one
2	two
3	three
4	four
5	five
6	six
7	seven
8	eight
9	nine
제한사항
1 ≤ s의 길이 ≤ 50
s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.
제한시간 10초

영단어를 배열로 정리해봄

const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

여기서 배열의 인덱스 값을 확인하면 맞는 알파벳이 나옴
이후 조건문 설정

const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
function solution(s) {
    var answer = 0;
    
    for( let i = 0; i < numbers.length; i++){
        console.log(numbers[i], i)
    }

}
이렇게하면 번호와 인덱스가 알맞게나옴
이걸 어떻게 활용하냐면
.replace(변경할 대상, 변경할 내용)으로 사용함
a = 'abc'  // abc
a.replace("a" , 1) // abc

const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
function solution(s) {
    var answer = 0;
    
    for( let i = 0; i < numbers.length; i++){
        s= s.replace(numbers[i], i) 
        console.log(s)
    }

}

i 번째 인덱스와 번호가 들어가면서 문자열이 나오면 바꿔버림

여기서 리턴을 설정해서 숫자로 바꿔줌

const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
function solution(s) {
    var answer = 0;
    
    for( let i = 0; i < numbers.length; i++){
           s= s.replace(numbers[i], i) 
        console.log(s)
    }
    console.log(s)
    return Number(s);
}

근데 replace는 한가지만 변경하기 떄문에
replaceAll로 해야 전체를 바꿔줌
근데 프로그래머스에서는 replaceAll을 인식하지 않음
직접 replaceAll을 구현해봄


const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
function solution(s) {
    var answer = 0;
    
    for( let i = 0; i < numbers.length; i++){
        while(s.includes(numbers[i])){
           s= s.replace(numbers[i], i) 
    }
}
    console.log(s)
    return Number(s);
}

해당되는 문자열이 얼만큼 있는지 모르니까 계속 실행시킨다는것

메소드써보기

split 으로 쪼갠다음에 join으로 빈문자열로 넣어주면 문자열로 만들어줌 
split의 기준을 i 로 해서 하나씩 찾아서 교체되게함
여기서는 중복되는것도 알아서 바꿔줌

const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
function solution(s) {
    numbers.forEach( (num, i) => {
        s = s.split(num).join(i);
    })
    return Number(s)
}

정규표현식 쓰기

//.test("")
// /g는 전체를 찾겠다는 말임, /zero/g/ "0" 이후 0으로 변경
// 이걸 숫자로 바꾸됨 됨

function solution(s){
    s = (s.replace(/zero/g, "0"))
    s = (s.replace(/one/g, "1")) 
    s = (s.replace(/two/g, "2")) 
    s = (s.replace(/three/g, "3")) 
    s = (s.replace(/four/g, "4")) 
    s = (s.replace(/five/g, "5")) 
    s = (s.replace(/six/g, "6")) 
    s = (s.replace(/seven/g, "7")) 
    s = (s.replace(/eight/g, "8")) 
    s = (s.replace(/nine/g, "9")) 

    return Number(s)
}

근데 너무 기니까 한번 바꿔보자
반복문과 정규표현식을 사용하면 됨
정규표현식 안에는 변수가 안들어감 근데 어떻게 넣어주느냐?
new RegExp 객체형태로 새로 만들어줄 수 있음 정규표현식에 변수를 사용할 수 있게 도와줌 ("대상" "기능" )
let a = 'abc'
let a = 'abcaa'
let b = new RegExp("a", "g") // -> /a/g
a.replace(b, 'z') // -> zbczzz

const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

function solution(s){
    for(let i = 0; i < numbers.length; i ++){
        const regExp = new RegExp(numbers[i], "g")
        s = s.replace( regExp, i)
    }
    return Number(s)
}

