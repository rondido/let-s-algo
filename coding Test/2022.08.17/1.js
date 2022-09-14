//중북된 글자를 제외한 문자 수 출력
function solution(s) {
  let answer;
  let a = new Set(s);
  answer = a.size;
  return answer;
}

console.log(solution("google"));
