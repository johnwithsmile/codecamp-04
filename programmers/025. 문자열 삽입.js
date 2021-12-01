//num을 받아서 각각 숫자 사이에 "-"이 들어간 문자열 만들기
//for문 사용하기
// num 이 3일 경우 3이랑 작거나 같을때까지 i= i+1을 시킨다.
// for(let i = 1; i<= num; i = i+1){
//     console.log(i)
// }
//1,2,3, 출력
//(문자열 + 숫자열 하면 문자타입으로 변하게 됨)

function makeNumber(num) {
	let str = '';
												 // i++
	for( let i = 1; i <= num; i = i + 1 ) {
		str = str + i

    if( i !== num ) {
			str = str + '-'
    }	
	}
}