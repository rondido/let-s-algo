//문자열 내 p와 y의 개수

function solution(s) {
  let a = s.toLowerCase();
  let check_a = a.split("p").length;
  let check_b = a.split("y").length;
  return check_a === check_b ? true : false;
}
