function solution(arr, divisor) {
  var answer = [];
  for (let x of arr) {
    if (x % divisor === 0) {
      answer.push(x);
    }
    if (answer.length == 0) {
      answer = [-1];
    }
    answer.sort((a, b) => a - b);
  }
  return answer;
}
