//자연수를 뒤집어 배열로 만들기
// function solution(n) {
//     var answer = n.toString().split("").reverse().map(item => parseInt(item));

//     return answer;
// }

function solution(n) {
  var arr = [];

  do {
    arr.push(n % 10);
    console.log(arr);
    n = Math.floor(n / 10);
  } while (n > 0);
  return arr;
}

console.log(solution(12345));
