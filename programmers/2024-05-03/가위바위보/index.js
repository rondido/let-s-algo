function solution(rsp) {
  var answer = "";
  const user = rsp.split("");
  for (let i = 0; i < user.length; i++) {
    if (user[i] === "2") answer += "0";
    else if (user[i] === "0") answer += "5";
    else answer += "2";
  }
  return answer;
}
// let arr = {
//   2: 0,
//   0: 5,
//   5: 2
// };
// var answer = [...rsp].map(v => arr[v]).join("");
// return answer;
