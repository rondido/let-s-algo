function solution(n) {
  let answer = 0;
  const value = String(n).split("");
  answer = value.reduce((acc, cur) => acc + Number(cur), 0);
  return answer;
  // return n.toString().split("").reduce((acc, cur) => acc + Number(cur), 0);
}
