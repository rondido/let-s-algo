//선택 정렬
// function solution(arr) {
//   return arr.sort((a, b) => {
//     return a - b;
//   });
// }

function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  return answer;
}
let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
