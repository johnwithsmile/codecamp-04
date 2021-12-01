//특정 문자열 세기
//for을 사용해서 풀기, 대소문자 상관없이세기
// str ="i am from korea" -> 문자열 출력
// for(let i = 0;) 최초식 시작, 0인 이유는 첫번째 인덱스 값이 문자열에도 0번째이기때문
// 그래서 i < str.lengt까지 
// i = i+ 1 하나씩 더하기
// 이제 a인지 판단하자
// let count =0 을 설정, 인덱스 값에 a가 있으면 카운트를 하나 늘리기
// if (str[i]) === "a"){
//     count = count +1;
// }
// 대문자도 세야 되잖아?
// || str[i] === "A" 추가
// console.log(str[i], count)로 확인

function countLetter(str) {
	let count = 0;

	for( let i = 0; i < str.length; i = i + 1 ) {
		if( str[i] === 'a' || str[i] === 'A' ) {
			count = count + 1;
    }
  }
}