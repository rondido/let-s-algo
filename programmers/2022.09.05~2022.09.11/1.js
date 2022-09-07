// lv1
//문자열을 내림차순으로 배치하기
function solution(s) {
  let answer = s
    .split("")
    .sort((a, b) => b.charCodeAt() - a.charCodeAt())
    .join("");

  return answer;
}
