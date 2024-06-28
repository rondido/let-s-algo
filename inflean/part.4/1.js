// //나의 풀이
// function solution(arr) {
//   let answer,
//     max = Number.MIN_SAFE_INTEGER;
//   arr.forEach((element) => {
//     const convertNumber = element.toString().split("").map(Number);
//     const sum = convertNumber.reduce((acc, nur) => acc + nur, 0);
//     if (sum > max) {
//       max = sum;
//       answer = element;
//     } else if (sum === max) {
//       if (element > answer) answer = element;
//     }
//   });

//   return answer;
// }

//let arr = [128, 460, 603, 40, 521, 137, 123];
//console.log(solution(arr));

function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
