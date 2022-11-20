//arr에서 제일 큰값
function solution(arr) {
  let answer = Math.max(...arr);
  //     min = Number.MAX_SAFE_INTEGER;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] < min) min = arr[i];
  //   }
  //   answer = min;

  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
