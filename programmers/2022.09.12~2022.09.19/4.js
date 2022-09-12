//정수 내림차순으로 정렬

function solution(n) {
  var answer = Number(
    n
      .toString()
      .split("")
      .sort((a, b) => Number(b - a))
      .join("")
  );
  return answer;
}
