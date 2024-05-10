function solution(array) {
  const answer = Math.max(...array);
  const index = array.indexOf(answer);
  return [answer, index];
}
