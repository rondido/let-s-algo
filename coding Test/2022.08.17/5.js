//문 매칭하기(대소문자 구별)
/**
 * @param {str} keys
 * @param {str} doors
 * @return {str}
 */
function solution(keys, doors) {
  keys = keys.split("");
  doors = doors.split("");

  if (keys.reverse().join("").toUpperCase() !== doors.join("").toUpperCase())
    return "NO";

  return "YES";
}

console.log(solution("bgr", "RGB"));
