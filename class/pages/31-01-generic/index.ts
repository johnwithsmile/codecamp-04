/* eslint-disable no-unused-vars */
// 1. 문자 불러오는 함수
function getString(arg: string): string {
  return arg;
}
const result1 = getString("철수");

// getString(3);(number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.)

// 2. 숫자

function getNumber(arg: number): number {
  return arg;
}
const result2 = getNumber(8);
// getNumber("철수") 에러

// 3. 모두(any)

function getAny(arg: any): any {
  return arg;
}
const result31 = getAny(8);
const result32 = getAny("안녕하세요");
const result33 = getAny(true);

// 4. 모두(generic)

function getGeneric<MyType>(arg: MyType): MyType {
  return arg;
}
const result41 = getGeneric(8);
const result42 = getGeneric("안녕하세요");
const result43 = getGeneric(true);

// 5.any 응용

function getReverse(arg1: any, arg2: any, arg3: any): [any, any, any] {
  return [arg3, arg2, arg1];
}
const result51 = getReverse("철수", "다람쥐초등학교", 8);
const result52 = getReverse(13, "영희", "토끼초등학교");
const result53 = getReverse(100, 200, "토끼초등학교");

// 6. generic 응용
// pretter-ignore // 프리티어 무시
// @ts-ignore       // 타입스크립트 무시
function getReverseType<MyType1, MyType2, MyType3>(
  arg1: MyType1,
  arg2: MyType2,
  arg3: MyType3
): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}
const result61 = getReverseType("철수", "다람쥐초등학교", 8);
const result62 = getReverseType(13, "영희", "토끼초등학교");
const result63 = getReverseType(100, 200, "토끼초등학교");

// 7. 축약

function getReverseT<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}
const result71 = getReverseT("철수", "다람쥐초등학교", 8);
const result72 = getReverseT(13, "영희", "토끼초등학교");
const result73 = getReverseT(100, 200, "토끼초등학교");

// 8. 축약 2

function getReverseTUV<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
const result81 = getReverseTUV("철수", "다람쥐초등학교", 8);
const result82 = getReverseTUV(13, "영희", "토끼초등학교");
const result83 = getReverseTUV(100, 200, "토끼초등학교");
