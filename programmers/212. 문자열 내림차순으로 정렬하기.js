function solution(s) {
    return s.split('').sort().reverse().join('');
}
// 문자열을 split메소드를 사용하여 배열로 쪼갠다.
// 예: ['Z', 'b', 'c', 'd', 'e', 'f', 'g']
// sort메소드로 오름차순으로 나열해줌, 대신 문자 앞자리값만 확인함
// 오름차순 내림차순을 구별할 수 있음, 
//[]sort((a, b) => {})
// return a - b 내림차순은 b - a
// 음수라면 해당되는 값을 뒤로 보내고 앞으로 보내는 계산법..?
// 예: ["Z", "b", "c", "d", "e", "f", "g"]
// reverse메소드로 반전시켜준다.
// 예: ["g", "f", "e", "d", "c", "b", "Z"]
// join메소드로 문자열로 바꿔줘서 반환한다.
// 예: "gfedcbZ"

// "b" > "a" 값이 true 로 나옴
// 대문자는 소문자보다 항상 뒤에 나옴 "Z" > "a"
// sort는 항상 원본을 변경해주니 answer = 으로 지정하지 않아도됨

["a", "c", "z", "f"].sort((a, b) => {
    return a > b ? -1 :1
})
오름차순

["a", "c", "z", "f"].sort((a, b) => {
    return a < b ? -1 :1
})

function solution(s) {
    const answer = [];
    for( let i = 0; i < s.length; i++){
        answer.push(s[i])
    }
    answer.sort((a, b)=> {
        return a > b ? -1 : 1
        // 클땐 앞으로 보내고 아니면 뒤로 보내기
    })
    return answer.join(""); //문자열을 배열로 바꿔줌

}