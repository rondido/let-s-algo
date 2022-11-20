//A의 문자열을 #으로 변환

function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === "A") answer += "#";
    else answer += x;
  }
  return answer;
  //   let answer = s;
  //   answer = s.replace(/A/g, "#");

  return answer;
}

let str = "BANANA";
console.log(solution(str));
