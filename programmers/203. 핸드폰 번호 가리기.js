// 문제 설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

function solution(phone_number) {
    let answer = '';
    
    // console.log(phone_number) // 항상 출력확인하기
    // console.log(typeof phone_number) // 정체확인하기
    for(let i = 0; i < phone_number.length; i = i + 1){    
        if(i < phone_number.length - 4) {
            answer = answer + "*" // answer += '*'
        } else {answer = answer + phone_number[i]
               }
        
    }
    return answer;
    // return answer;
}

// 메소드 실행

function solution(phone_number) {
    let answer = ""
    answer = answer.padStart(phone_number.length - 4, "*")  //뒷글자 제외 나머지 별표로 채움
    answer += phone_number.slice( phone_number.length - 4, phone_number.length); //해당 길이만큼 잘라줌(어디서,어디까지)
    
    return answer
}