//가장 짧은 문자 거리

function solution(s, t) {
  let answer = [];

  let n = s.length;
  let p = 1000;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t) {
      p++;
      answer.push(p);
    } else {
      p = 0;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = n; i >= 0; i--) {
    if (s[i] !== t) {
      p--;
      answer.push(p);
    } else {
      p = 0;
      answer.push(p);
    }
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
