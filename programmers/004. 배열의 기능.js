let fruits = ["사과", "바나나", "파인애플"]

let newFruits = fruits[2]

newFruits.push = fruits[fruits.length-1]

console.log(newFruits)

//mento
let fruits = ["사과", "바나나", "파인애플"]

fruits.length //3이나옴
fruits[3-1] // 파인애플이나옴, 총데이터 값(length)의 -1이 마지막 즉 길이는 3이지만 마지막 값의 인덱스 번호는 2

const lastFruits = fruits[fruits.length - 1] //lastFruits에는 파인애플이 담김
let newFruits = []
newFruits.push(lastFruits)

newFruits[0] = lastFruits