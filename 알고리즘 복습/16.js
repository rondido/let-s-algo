//중복 문자 제거
function solution(s) {
  //let answer = "";
  //   for (let i = 0; i < s.length; i++) {
  //     //indexOf 중복된 값이 있으면 처음에 발견된 index 값을 반환한다
  //     if (i === s.indexOf(s[i])) {
  //       answer += s[i];
  //     }
  //   }
  //   let answer = 0;
  //   let pos = s.indexOf("k");
  //   while에서 -이기때문에 끝나서 밖으로 나옴
  //   while (pos !== -1) {
  //     answer++;
  //     pos = s.indexOf("k", pos + 1);
  //   }
  let answer = 0;
  let pos = s.indexOf("k");

  while (pos !== -1) {
    answer++;
    //pos에서 찾은 index뒤에서부터 탐색하라
    pos = s.indexOf("k", pos + 1);
  }
  return answer;
}
console.log(solution("ksekkset"));
