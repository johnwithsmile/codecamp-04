//0부터 해당 수까지의 합을 구하기
//풀이과정, 예시를 하나 해보자
//let num = 5;
// 1+2+3+4+5 를 더하면 됨
//최초식 설정하기
//for (let i =1; i <= 5; i = i +1 )
//    console.log(1)
//i 1일때부터 시작, 5까지만 반복하기
//그리고나서 +1로 더해줌 -> 1,2,3,4,5 출력
function sum(num) {
	let count = 0;
	for( let i = 1; i <= num; i = i + 1 ) {
		count = count + i;
  }
}

function GUGU(){
	let answer =[]
	for(let i=0; i<= 9; i++){
		for(let j=0; j<= 10; j++){
			answer = (i + "*" +j + "=" + i*j )
		}
	}
}