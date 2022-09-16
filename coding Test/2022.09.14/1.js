// 최소한의 화폐 개수 반환하기
//나눠어 떨어질때까지 나누기

function solution(A) {
  let answer = 0;
  let arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1];

  arr.forEach((v) => {
    answer += Math.floor(A / v);
    console.log(answer);
    A = A % v;
  });
  return answer + A;
}
console.log(solution(5500));
