const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

student.school = school
//school이라는 객체를 통채로 넣어주면됨
// 여기서 앞의 school은 키값, school은 데이터
console.log(student)