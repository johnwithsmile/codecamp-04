// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
// 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.

function solution(participant, completion){
    let answer = "";
    return answer ;
}
// 먼저 console.log(participant, completion) 으로 뭐가 들어오는지 찾아보자

// 참가자 명단, 완주자 명단을 오름차순으로 정렬해줘야함
// participant.sort()
// completion.sort()
// 이렇게 하면 알파벳 순서로 정렬이 됨

// 같은i값으로 같은 위치에 있는 값을 가져올 수 있게됨
// 근데 참가자는 있는데 완주를 하지 못하게 될 경우 같지 않게 됨

// 그리고 같은 이름이 있는 경우도 맞지 않게됨


function solution(participant, completion){
    participant.sort()
    completion.sort()
    
    let answer ='';
    for(let i = 0; i< participant.length; i++){
        console.log(participant[i], completion[i])
    }
    let answer = "";
    return answer ;
}

// 그러면 비교를 하기
// 참가자 명단과 완주자 명단을 비교했을 때
// 완주자 명단에 없는 참가자를 찾은 후, 바로 반복문을 종료

function solution(participant, completion){
    participant.sort()
    completion.sort()
    
    let answer ='';
    for(let i = 0; i< participant.length; i++){
        if(participant[i] !== completion[i]){
            answer = participant[i];
            console.log(participant[i], completion[i], answer)
            break;
        }
    }
    return answer ;
}

함수 안에서 break 를 쓰지 않고 그냥 앞에서 return을 시킬 경우 해당 값을 리턴 시킴
function solution(participant, completion){
    participant.sort()
    completion.sort()
    
    for(let i = 0; i< participant.length; i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
    return answer ;
}

// 메서드로 풀기
// 필터로 걸러서 완주자와 참여자가 같지 않으면 그 명단만 남음
// 그래서 이렇게 거르면 됨

// 근데 동명이인이 남는 경우가 생김
// 오른차순으로 정렬됐을때 동명이인은 1번으로 가고 불참선수는 0번째 인덱스에 남음

// 완주하지 못한사람, answer의 0번째 인덱스를 가져오면 맞는 사람을 고를 수 있음

function solution(participant, completion) {
    participant.sort()
    completion.sort()

    const answer = participant.filter((name, i) => {
        return name !== completion[i]
    })
    return answer[0]
}