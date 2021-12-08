https://programmers.co.kr/learn/courses/30/lessons/42889
슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 
요즘 신규 사용자의 수가 급감한 것이다. 원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.

이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다. 
역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 오렐리를 위해 실패율을 구하는 코드를 완성하라.

실패율은 다음과 같이 정의한다.
스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 
실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

제한사항
스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
stages의 길이는 1 이상 200,000 이하이다.
stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.

for문
각각의 스테이지를 객체형태로 정리


function solution(N, stages) {
    var answer = [];
    const stageArr = [];
    for(let i =1; i <= N; i++){
        stageArr.push({
            "stage": i, // 현재 스테이지 번호
            "users": 0, // 현재 스테이지를 클리어하지 못한 유저의 수
            "fail" : 0 // 현재 스테이지의 실패율을 저장
                })
    }
    console.log(stageArr)
}

이렇게하면 각각 N만큼의 스테이지의 정보를 저장할 수 있음 이걸 이용해서 문제를 풀어야함
먼저 stages를 sort로 정렬해야함


function solution(N, stages) {
    stages.sort( (a, b) => a - b );
    
    const clearArr = [];
    for( let i = 1; i <= N; i++ ) {
        clearArr.push({ 
            'stage' : i, // 현재 스테이지의 번호
            'clear' : 0, // 클리어 하지 못한 유저의 수 
            'fail' : 0, // 총 실패율을 저장
        })
    }
    
    let users = stages.length;
    for( let i = 0; i < stages.length; i++ ) {
        if( clearArr[ stages[i] - 1 ] ) {
            clearArr[ stages[i] - 1 ].clear += 1;
            
            // 현재 스테이지와 다음 스테이지의 번호가 동일하지 않을 때
            if( stages[i] !== stages[i + 1] ) {
                const fail = clearArr[ stages[i] - 1 ].clear / users;
                users = users - clearArr[ stages[i] - 1 ].clear;
                
                clearArr[ stages[i] - 1 ].fail = fail;
            }
        }
    }
    
    const answer = clearArr.sort( (a, b) => {
        return b.fail - a.fail
    }).map( el => el.stage )
    
    return answer;
}

첫번째 스테이지를 찾아서 유저수의 수만큼 더하기를 시킴 -> 클리어하지 못한 유저수까지는 구함

실패율을 구하면 됨. 
첫번째 스테이지에서 1이라는 숫자를 받아 users에 저장하고 다음 반복문에서 2라는 숫자가 들어오는데 
이때 첫번째 스테이지에 대한 정보 입력은 완료가 됐고 정보가 늘어날 일이 없음

다른 스테이지로 넘어가는 시점에서 구하면 됨 stages[i] !== stages[i+1] stage의 i번째와 +1을 했을 때로 조건을 걸어서실행시킴
이후 게임에 도전한 모든 유저의 수를 players에 담음

스테이지에 접근해서 모든 플레이어수에 나눈 값을 fail에 저장, 그리고 방금 실패한 숫자만큼 빼줘야 다음스테이지에 도전함
그럼이렇게하면 fail이란곳에 담게됨


메서드

function solution(N, stages) {
    stages.sort( (a, b) => a - b );
    
    const answer = new Array(N)
                    .fill(1)
                    .map( (el, i) => {
                        const stage = el + i;
                        const stageInfo = { 'stage' : stage, 'users' : 0, 'fail' : 0 };
                        
                        stages.forEach( (user, i) => {
                            if( user === stage ) {
                                stageInfo.users += 1;
                                
                                if( stages[i + 1] !== stage ) {
                                    stageInfo.fail = stageInfo.users / stages.length;
                                    stages.splice( 0, stageInfo.users );
                                }
                            }
                        })
                        return stageInfo;
                    })
    
    const result = answer.sort( (a, b) => {
        return b.fail - a.fail   
    }).map( el => el.stage )
    
    return result;
}