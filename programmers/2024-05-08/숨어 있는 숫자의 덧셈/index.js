function solution(my_string) {
  var answer = 0;
  const num = my_string.replace(/[^0-9]/g, "").split("");
  answer = num.reduce((acc, current) => acc + Number(current), 0);
  return answer;
}

// function solution(my_string) {
//   return [...my_string].reduce((acc,cur)=>Number(cur) ? +acc + +cur : acc, 0)
// }
