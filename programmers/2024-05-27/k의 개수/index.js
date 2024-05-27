function solution(i, j, k) {
  var answer = "";
  for (let a = i; a <= j; a++) {
    answer += a;
  }
  return answer.split(k).length - 1;
}
