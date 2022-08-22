//세 수 중 가장 최솟값
function solution(a, b, c){
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}
console.log(solution(2, 5, 1));
