function solution(s) {
  //let answer = str.toUpperCase();
  let answer = 0;
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) answer++;
  }
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
