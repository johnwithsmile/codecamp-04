https://programmers.co.kr/learn/courses/30/lessons/17682


// 1. 입출력 예제 확인 dartResult, 설명을 보고 이해



function solution(dartResult) {
    // 3차례 게임의 점수들을 각각 저장
    const answer = [];
    for (let i = 0; i < dartResult.length; i++) {
        console.log(dartResult[i])
    }
}

// 이럼 darkResult가 나옴 
// 숫자들과 옵션만 가져옴
// score라는 빈 스트링을 만듬
// 근데 dartResult가 모두 문자열이니 숫자열로 바꿔줌 -> 문자열은 NaN으로 바뀜
// if문 사용함 Number.isNaN  값이 넘버가 아닌지 검증해줌 - 숫자면 false

const bonus = ["S", "D", "T"];
function solution(dartResult) {
    // 3차례 게임의 점수들을 각각 저장
    const answer = [];
    let score = ""; // 점수를 뽑아서 저장
    for (let i = 0; i < dartResult.length; i++) {
        // 숫자 타입의 데이터인지를 검증하고, 숫자가 맞다면 false를 리턴한다.
        if (Number.isNaN(Number(dartResult[i])) === false) {
            score += dartResult[i];

        }
        
    }
    console.log(score)
}


function solution(dartResult) {
    // 3차례 게임의 점수들을 각각 저장
    const answer = [];
    let score = ""; // 점수를 뽑아서 저장
    for (let i = 0; i < dartResult.length; i++) {
        // 숫자 타입의 데이터인지를 검증하고, 숫자가 맞다면 false를 리턴한다.
        if (Number.isNaN(Number(dartResult[i])) === false) {
            score += dartResult[i];
        } else if (bonus.includes(dartResult[i])) {
            console.log(dartResult[i])
        }
        
    }
    console.log(score)
}
// 이렇게하면 보너스값도 나오게됨


const bonus = [ "S", "D", "T" ]; // 보너스를 판단하기 위해서 배열에 저장

function solution(dartResult) {
    // 3차례 게임의 점수들을 각각 저장
    const answer = [];
    
    let score = ""; // 점수를 뽑아서 저장
    for( let i = 0; i < dartResult.length; i++ ) {
        // 숫자 타입의 데이터인지를 검증하고, 숫자가 맞다면 false 를 리턴한다.
        if( Number.isNaN( Number( dartResult[i] ) ) === false ) {
            score += dartResult[i];
        
        } else if( bonus.includes( dartResult[i] ) ) {
            score = Number( score );
            if( dartResult[i] === "D" ) {
                score = Math.pow( score, 2 ); // 2제곱
                
            } else if( dartResult[i] === "T" ) {
                score = Math.pow( score, 3 ); // 3제곱
            }
            // 보너스를 연산한 시점에서 점수를 배열에 저장
            answer.push( score );
            // 다음 게임을 위해 점수를 초기화
            score = "";
        
        } else {
            if( dartResult[i] === "#" ) {
                // 아차상이라면 해당 점수 (배열의 마지막 데이터) 에 -1 을 곱함
                answer[ answer.length - 1 ] *= -1;
                
            } else {
                // 스타상이라면 해당 점수 x2
                answer[ answer.length - 1 ] *= 2;
                
                if( answer.length > 1 ) {
                    // 처음이 아니라, 2번째부터라면
                    answer[ answer.length - 2 ] *= 2;
                }
            }
        }
    }
    
    let result = 0;
    for( let i = 0; i < answer.length; i++ ) {
        result += answer[i];
    }
    return result;
}

// 메서드

const bonus = [ "S", "D", "T" ]; // 보너스를 판단하기 위해서 배열에 저장

function solution(dartResult) {
    // 3차례 게임의 점수들을 각각 저장
    const answer = [];
    
    let score = "";
    dartResult.split("").forEach( el => {
        if( !isNaN( Number(el) )) {
            score += el;
            
        } else if( bonus.includes( el ) ) {
            if( el === "D" ) {
                // 숫자 타입으로 변환하지 않아도 자동으로 숫자 타입으로 변환
                score = Math.pow( score, 2 );
            
            } else if( el === "T" ) {
                score = Math.pow( score, 3 );
            }
            
            answer.push( Number(score) );
            score = "";
            
        } else {
            if( el === "#" ) {
                // 아차상
                answer[ answer.length - 1 ] *= -1;
                
            } else {
                // 스타상
                answer[ answer.length - 1 ] *= 2;
                
                if( answer.length >= 2 ) {
                    answer[ answer.length - 2 ] *= 2;
                }
            }
        }
    })
    
    return answer.reduce( (acc, cur) => acc + cur );
}