//1다스에 12개 

function solution(n) {
  let answer;
  //Math.ceil 올림
  answer = Math.ceil(n / 12);
  return answer;
}

console.log(solution(178));
