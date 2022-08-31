//최대 매출
//sliding window
//임의 창문을 만들어 옆으로 옮겨지면서 연산
function solution(k, arr) {
  let answer,
    sum = 0,
    max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  //위치를 옮긴다 3칸식
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
