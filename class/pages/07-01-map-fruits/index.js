const FRUITS = [
    { number: 1, title: "레드향" }, // <div>1 레드향</div>
    { number: 2, title: "샤인머스켓" }, // <div>2 샤인머스켓</div>
    { number: 3, title: "산청딸기" }, // <div>3 산청딸기</div>
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
  ];

export default function MapFruitsPage(){
    
    // const aaa =[<div>1 레드향</div>, <div>2 샤인머스켓</div> , <div>3 산청딸기</div>]
    // const bbb = FRUITS.map((el) => (
    //     <div>{el.number} {el.title}</div>
    // ))

    return(
        // <div>{aaa}</div>
        <div>
            {FRUITS.map((el) => <div>{el.number} {el.title}</div>)}
        </div>
    )

}

const classmates = [
    {name: "철수", age:10, school: "토끼초등학교"},
    {name: "영희", age:13, school: "다람쥐초등학교"},
    {name: "훈이", age:11, school: "토끼초등학교"}
]
// = 이 아니라 ===쓰기
classmates.filter((el)=> (el.school === "토끼초등학교"))

classmates.filter((el)=> (el.age = 11))

classmates.filter((el)=> (el.name === "영희"))
