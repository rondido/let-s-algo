function solution(arr, size) {
  let valueArr = [];
  while (arr.length) {
    valueArr.push(arr.splice(0, size));
  }
  return valueArr;
}

console.log(solution([1, 9, 6, 3, 2], 3));
