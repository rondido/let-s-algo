//격자판 최대 합
// sum1 은 행의 합
// sum2은 열의 합
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let sum1 = (sum2 = 0);
  for (let i = 0; i < arr.length; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < arr.length; j++) {
      //행의 합
      sum1 += arr[i][j];
      // 열의 합
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  //대각선 합
  // 0,0 1,1,2,2
  sum1 = sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
    //0,4
    //1,3

    sum2 += arr[i][arr.length - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
