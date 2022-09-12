//자릿수 더하기
function solution(n) {
  var a = String(n).split("");
  var answer = a.reduce((a, b) => a + Number(b), 0);
  return answer;
}

// function solution(n) {
//   let answer = 0;
//   while (n >= 1) {
//     let temp = n % 10;
//     answer += temp;

//     n = (n - temp) / 10;
//   }
//   return answer;
// }
