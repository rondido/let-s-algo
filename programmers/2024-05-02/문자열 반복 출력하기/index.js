// function solution(my_string, n) {
//   var answer = "";
//   const arr_str = my_string.split("");
//   for (let i = 0; i < arr_str.length; i++) {
//     for (let j = 0; j < n; j++) {
//       answer += my_string[i];
//     }
//   }
//   return answer;
// }

// 다른사람 풀이

function solution(my_string, n) {
  var answer = [...my_string].map((v) => v.repeat(n)).join("");
  return answer;
}

console.log(solution("hello", 3));
