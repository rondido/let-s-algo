//공주구하기

function solution(n, k) {
  let answer;
  let que = Array.from({ length: n }, (v, i) => i + 1);
  while (que.length) {
    for (let i = 1; i < k; i++) que.push(que.shift());
    que.shift();
    if (que.length === 1) {
      answer = que.shift();
    }
  }
  return answer;
}

console.log(solution(8, 3));
