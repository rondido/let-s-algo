//선택 정렬
function solution(arr) {
  let answer = arr;
  let abc;
  for (let i = 0; i < arr.length - 1; i++) {
    let mainindex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[mainindex] > arr[j]) {
        mainindex = j;
      }
      //[arr[i], arr[mainindex]] = [arr[mainindex], arr[i]];
      let swap = arr[mainindex];
      arr[mainindex] = arr[i];
      arr[i] = swap;
    }
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
