//나의 풀이
// function isPrime(num) {
//   if (num === 1) return false;
//   for (let i = 2; i <= parseInt(num / 2); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// function solution(arr) {
//   let answer = [];
//   const reverseNum = arr.map((value) =>
//     parseInt(value.toString().split("").reverse().join(""), 10)
//   );
//   for (let i = 0; i < reverseNum.length; i++) {
//     if (isPrime(reverseNum[i])) answer.push(reverseNum[i]);
//   }

//   return answer;
// }

// let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(solution(arr));

//정답 풀이
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      //뒤접어진 숫자로 변환
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
