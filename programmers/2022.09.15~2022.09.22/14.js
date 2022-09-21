// 같은 숫자는 싫어
function solution(arr) {
  var answer = [];
  return arr.filter((val, index) => val != arr[index + 1]);
}
