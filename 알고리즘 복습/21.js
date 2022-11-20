//점수 계산

//cnt에서 연속으로 점수가 더해지면 cnt에 누적해주어 값을 answer에 더해주고
// x가 1이 아니면 cnt = 0으로 초기화
function solution(arr) {
  let answer = 0,
    cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else {
      cnt = 0;
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
