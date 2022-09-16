//가운데 문자열 찾기

function solution(s) {
  var answer = "";
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) {
    answer = s.substring(mid, mid + 1);
  } else answer = s.substring(mid - 1, mid + 1);
  return answer;
}
