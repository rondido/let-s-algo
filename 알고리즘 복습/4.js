//자연수 n까지의 총합
function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(6));
