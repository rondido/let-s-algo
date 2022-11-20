//중복 단어 제거
function solution(s) {
  //   let answer;
  //   //a가 값이고 b가 index
  //   //참인 요소를 따로 새로운 배열을 만든다..
  //   answer = s.filter((a, b) => {
  //     //if (s.indexOf(a) === b) return true;
  //     return s.indexOf(a) === b;
  //   });
  let answer;
  answer = s.filter((v, i) => {
    return s.indexOf(v) === i;
  });
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
