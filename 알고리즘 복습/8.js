function solution(arr) {
  let answer = arr;
  //reduce function 으로 받고 누적 연산 가능 function(a,b) => a+b,0 0으로 초기화
  let sum = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        //j의 값 하나만 삭제
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }

  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
