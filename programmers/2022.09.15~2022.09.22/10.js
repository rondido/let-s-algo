//약수의 개수와 덧셈
function solution(left, right) {
  var answer = 0;
  //left right 작은값부터 큰값까지
  for (let i = Math.min(left, right); i <= Math.max(left, right); i++) {
    //한바퀴 돌때마다 cnt를 더해주어 그 값을 홀수인지 짝수인지 판별
    // i = 13, 14 ,15,16, 17
    let cnt = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        cnt += 1;
      }
    }
    answer = cnt % 2 === 0 ? (answer += i) : (answer -= i);
  }
  return answer;
}

// function solution(left, right) {
//     var answer = 0;
//     for (let i = left; i <= right; i++) {
//         if (Number.isInteger(Math.sqrt(i))) {
//             answer -= i;
//         } else {
//             answer += i;
//         }
//     }
//     return answer;
// }

//제곱이 정수면 약수의 갯수가 홀수다?

console.log(Math.sqrt(14));
