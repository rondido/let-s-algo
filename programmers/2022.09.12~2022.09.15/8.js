//평균 구하기

function solution(arr) {
  var answer = arr.reduce((a, b) => a + b / arr.length, 0);

  return answer;
}
