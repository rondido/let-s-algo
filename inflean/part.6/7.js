//교육과정 설계
function solution(need, plan) {
  let answer = "YES";
  let queue = need.split("");
  for (let x of plan) {
    console.log(x);
    if (queue.includes(x)) {
      console.log("includes" + x);
      if (x !== queue.shift()) {
        return "NO";
      }
    }
  }
  if (queue.length > 0) return "NO";
  return answer;
}
let a = "CBA";
let b = "CADBGE";
console.log(solution(a, b));
