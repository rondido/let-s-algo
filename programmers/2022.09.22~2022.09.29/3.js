//비밀지도
function solution(n, arr1, arr2) {
  answer = [];
  //2진수로 바꾸자
  //0을채워 넣자.
  //padstart?
  let sum_1 = [];
  let sum_2 = [];
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    sum_1.push(arr1[i].toString(2).padStart(n, "0"));
    sum_2.push(arr2[i].toString(2).padStart(n, "0"));
    for (let j = 0; j < arr1.length; j++) {
      if (sum_1[i][j] == 0 && sum_2[i][j] == 0) {
        result.push(" ");
      } else {
        result.push("#");
      }
    }
    answer.push(result.join(""));
    result = [];
  }

  return answer;
}
