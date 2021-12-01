// str = '12345'라고하면 제일 큰 수를 가져와야함
// let biggest = 0 이라고 설정, length까지 반복, 1씩증가
// for(let i = 0; i < str.length; i = i+){
// 	console.log(str[i])
// }
// 큰수 가져오기 큰수는 저장, 아니면 넘어가기

// typeof는 다음에 오는 것의 속성 평가, str이므로 숫자로 변경해줘야함

function bigNum(str) {
	let biggest = 0;

	for( let i = 0; i < str.length; i = i + 1 ) {
		if( Number(str[i]) > biggest ) {
			biggest = Number(str[i])
    }
  }
	
	return String(biggest)
}