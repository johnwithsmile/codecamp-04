export default function TypescriptPage(){

    //문자타입 - 타입추론
    let aaa = "안녕하세요"
    aaa = 3

    //문자타입 
    let bbb: string;
    bbb = "반갑습니다"
    bbb = 123

    //숫자타입
    let ccc: number = 5
    ccc = "asdf"

    //문자배열
    let ddd = [1,2,3,4,5,6]
    ddd = ["asdf", "qwer", "zxcc"]

    //숫자배열
    let eee: string [] = ["qwe", "qweq", "sas"]

    //숫자또는 문자배열
    let fff: number[] | string[] = [1,2,3,4,5,6,]
    fff: ["a","b","c"]

    //섞인 타입의 배열
    let ggg: (number | string)[] = [1, "b", 2, "c"]


    //객체타입
    interface IProfile {
        name: string
        age: number | string
        school: string
    }

    let profile : IProfile  = {
        name: "철수",
        age: 8,
        school : "다람쥐초등학교"
    }
    profile.age = "8살"
    profile.school = 3


    let ccc: any = 5





    return<div>타입 스크립트 연습</div>




}