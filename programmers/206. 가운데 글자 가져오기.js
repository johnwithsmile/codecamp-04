// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

//일단은 가운데를 가져오는 함수를 만들어보자

function solution(s){
    let center = s.length / 2;

    console.log(center)
}
//이렇게 가져와도 뒤에 소숫점으로 나누어지는 소숫점값 인덱스는 가져올 수가 없음
// 내림함수 Math.floor 사용

function solution(s){
    let center = Math.floor(s.length / 2);

    console.log(center)
}

// 이제 가운데의 인덱스값을 구할 수 있음
// 이제 인덱스값을 통해서 구함
function solution(s){
    let center = Math.floor(s.length / 2);
    let answer = s[center];
    console.log(answer)
}
// 그런데 짝수는 가운데 두글자를 가져와야되잖아?
function solution(s){
    let center = Math.floor(s.length / 2);
    let answer = s[center];

    if(s. legnth % 2 === 0){
        answer = s[center -1 ] + answer
    }
    console.log(answer)
}



function solution(s) {
    var answer = '';
    if(s.length % 2 == 0 ){ //짝수일 경우
        answer = s[s.length / 2 - 1 ] + s[s.length / 2];
    } else{
        answer = s[Math.floor(s.length/2)]; //홀수일 경우, 반내림 하기
    }
    return answer;
}