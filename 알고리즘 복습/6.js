//홀수의 총 합과 홀수 중 제일 작은 값 출력
function solution(arr) {
  let answer = [],
    min = Number.MAX_SAFE_INTEGER,
    sum = 0;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
