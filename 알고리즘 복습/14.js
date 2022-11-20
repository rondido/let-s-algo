function solution(s) {
  let answer = "",
    max = Number.MIN_SAFE_INTEGER;
  //    for (let x of s) {
  //     //비교 할 대상이 없기 때문에 max 변수를 선언하여 비교
  //     if (x.length > max) {
  //       max = x.length;
  //       answer = x;
  //     }
  //   }
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
