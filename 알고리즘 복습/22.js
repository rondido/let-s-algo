//등수 구하기
//array.from 첫번재 변수는 길이
function solution(arr) {
  let n = arr.length;
  //길이를 n만큼 가지고 있으면서 1로 초기화
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] < arr[j]) {
        answer[i]++;
      }
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
