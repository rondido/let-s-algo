//유효한 팰린드롬

function solution(s) {
  let answer = "YES";
  s = s
    .toLowerCase()
    //^은 부정 a-z가 아닌거는 다 빈 문자열로
    .replace(/[^a-z]/g, " ");
  console.log(s);
  if (s.split("").reverse().join("") !== s) {
    return "No";
  }
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
