// https://programmers.co.kr/learn/courses/30/lessons/72410

const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";
function solution(new_id) {
  // 1단계  대문자를 소문자로 치환
  new_id = new_id.toLoweCase();

  // 2단계 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자 제거
  let answer = "";
  for (let i = 0; i < new_id.length; i++) {
    if (filter.includes(new_id[i])) {
      answer += new_id[i];
    }
  }
  // 3단계 마침표가 연속으로 들어오면 하나의 . 로 치환(.. -> .)
  while (answer.includes("..")) {
    answer = answer.replace("..", ".");
  }

  // 4단계 .가 처음이나 끝에 위치한다면 제거 "bac".substr(1) 하면 (숫자)만큼 제거함
  if (answer[0] === ".") {
    answer = answer.substr(1);
  }
  if (answer[answer.length - 1]) {
    answer = answer.slice(0, answer.length - 1);
  }
  // 5단계 빈문자열이라면, "a" 를 대입
  if (answer === "") {
    answer = "a";
  }
  // 6단계 : 문자열의 길이가 16자 이상이면, 15자의 길이를 가지는 문자열로 치환(= 15 길이까지 자른다)
  // 제거한 후에, 마침표가 끝에 붙으면 제거
  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
  }
}

// shift 메소드는배열의 맨 앞에 있는 데이터를 제거해줌 그게 아니면 splice를 써도됨
const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution(new_id) {
  new_id = new_id.toLowerCase();

  let answer = new_id.split("").filter((str) => filter.includes(str));
}

// 정규표현식;
function solution(new_id) {
  const answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
