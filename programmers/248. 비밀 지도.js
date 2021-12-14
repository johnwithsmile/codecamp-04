https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
 
    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i], arr2[i])
        const map1 = arr1[i].toString(2).padStart(n, "0")
        const map2 = arr2[i].toString(2).padStart(n, "0")

        console.log(map1)
    }
}

// 같은 인덱스 값으로 arr1, arr2를 불러올 수 있음
// 그럼 10진법을 2진법으로 바꿔줘야함
// 그리고나서 앞자리에 0이없던 친구들을 0을 채워줘야되서 0을 채워넣음

// 배열안에 빈 스트링이 들어오게됨
// 이 배열안에 넣고 그걸 #인지 공백인지 알아오면 됨

// 진법바꾸고 변환하는것에 주의 

function solution(n, arr1, arr2) {
    const answer = [];
    for (let i = 0; i < arr1.length; i++) {
        answer[i] = "";
        const map1 = arr1[i].toString(2).padStart(n, "0")
        const map2 = arr2[i].toString(2).padStart(n, "0")

        for (let l = 0; l < map1.length; l++) {
            if (map1[l] === "1" || map2[l] === "1") {
                // 지도 둘 중 하나라도 벽(1)이면
                // 전체 지도에 벽(#)을 넣는다 
                answer[i] += "#"
            } else {
                // 아니라면(= 공백이라면)
                // 전체지도에 공백(" ")을 넣는다.
                answer[i] += " ";
            }
        }
    }
    return answer;
}

// 메소드

function solution(n, arr1, arr2) {
    const answer = arr1.map((map1, i) => {
        console.log(map1, arr2[i])
        map1 = map1.toString(2).padStart(n, "0")
        const map2 = arr2[i].toString(2).padStart(n, "0")

        return map1.split("").map((el, l) => {
            return el === "1" || map2[l] === "1"
                ? "#"
                : " "
        }).join("")

    })
    return answer; 
}
// arr1에 있는 인자값을 map1로 받아오는중, arr2[i]
// 2진법으로 환산 후 지도의 크기에 맞춤
// 이렇게 하면 변경된 2진법이 들어감