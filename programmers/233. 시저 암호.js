https://programmers.co.kr/learn/courses/30/lessons/12926

문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.

1. 대소문자 구문 없음 

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
    let answer = '';
    
    for( let i = 0; i < s.length; i++ ) {
        if( s[i] === " " ) {
            // 공백일 경우
            answer += " ";
            continue;  
        }
        
        let index = alphabet.indexOf( s[i] );
        const word = index > 25 ? alphabet.slice( 26, alphabet.length )
                                : alphabet.slice( 0, 26 );
        index = word.indexOf( s[i] ) + n;
        
        if( index >= 26 ) {
            index -= 26
        }
        
        answer += word[ index ];
    }
    
    return answer;
}

2. map

const lower = 'abcdefghijklmnopqrstuvwxyz'; // 소문자 알파벳만 저장
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // 대문자 알파벳만 저장

function solution(s, n) {
    const answer = s.split("")
                    .map( str => {
                        if( str === " " ) {
                            return str;
                        }
                        
                        const word = lower.includes( str ) ? lower : upper;
                        let index = word.indexOf( str ) + n;
                        
                        if( index >= 26 ) {
                            index -= 26;
                        }
                        return word[ index ];
                    })
    return answer.join("")
}


3. charCode

function solution(s, n) {
    let answer = "";
    for( let i = 0; i < s.length; i++ ) {
        if( s[i] === " " ) {
            answer += " ";
            continue;
        }
        
        let index = s[i].charCodeAt() + n;
        if( index > 122 || (index > 90 && (index - n) < 97) ) {
            // 소문자 z(122) 이상을 넘어가거나
            // 대문자 Z(90) 를 넘어가면서
            // 기존의 index 의 값이 대문자일 경우
            index = index - 26;
        }
        answer += String.fromCharCode( index );
    }
    return answer;
}