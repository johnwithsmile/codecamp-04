// 입력되는 score에 따라 알맞은 등급을 적어야 합니다.
// 100~90 → "A"
// 89~80 → "B"
// 79~70 → "C"
// 69~60 → "D"
// 59점 이하는 "F"
// 100점 초과나 0점 미만은 "잘못된 점수입니다"라는 문구를 띄워주세요.

// 내가한거 왜 작동은 안함??
// score 함수의 이름, num 함수의 인자값임. 
// 근데 아래 함수에 인자값을 안넣고 함수의 이름을 넣었으니 작동을 안함
function score(num){
    if(score > 100 || score < 0){
        console.log("잘못된 점수입니다")
    } else if(score >= 90){
        console.log("A")
    } else if(score >= 80){
        console.log("B")
    } else if(score >= 70){
        console.log("C")
    } else if(score >= 60){
        console.log("D")
    } else if(score >= 0){
        console.log("F")
    }
    console.log(score)
}
// 고치면 이렇게됨... score(num)으로 해놓고 num가 없었네
function grade(score){
    if(score > 100 || score < 0){
        console.log("잘못된 점수입니다")
    } else if(score >= 90){
        console.log("A")
    } else if(score >= 80){
        console.log("B")
    } else if(score >= 70){
        console.log("C")
    } else if(score >= 60){
        console.log("D")
    } else if(score >= 0){
        console.log("F")
    }
    console.log(score)
}

// // 테스트
function test(num){
    let result;
    if(test > 100 || test < 0){
        result = "positive"
    }
    else {
        result = "not positive"
    }
    return result;
}
// 여기서 스코어가 인자.아규먼트 인 것, grade에 100을 넣으면 스코어가 100이 됨
// 쉼표로 구별 가능 
// 예회처리는 가장 처음에 하는 것이 좋다
// function grade(score){
//     if( score > 100 || score < 0){
//     console.log("잘못된 점수입니다")
//     } else if(score <= 100 && score >= 90){
//     console.log("A")
//     } else if(score <= 89 && score >= 80){
//     console.log("B")
//     } else if(score <= 79 && score >= 70){
//     console.log("C")
//     } else if(score <= 69 && score >= 60){
//     console.log("D")
//     } else if(score <= 59){
//     console.log("F")
//     } 

// }
// 코드 축약하기 , 앞에 있는 조건문 삭제하면 위에서 안되면 아래로 내려가서
// 알아서 실행됨!!
function grade(score){
    if( score > 100 || score < 0){
    console.log("잘못된 점수입니다")
    } else if(score >= 90){
    console.log("A")
    } else if(score >= 80){
    console.log("B")
    } else if(score >= 70){
    console.log("C")
    } else if(score >= 60){
    console.log("D")
    } else if(score <= 59){
    console.log("F")
    } 

}