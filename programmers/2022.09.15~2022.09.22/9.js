// 문자열 다루기

function solution(s) {
  if (s.length === 4 || s.length === 6) {
    //모든 요소를 하나하나씩 판별해 number인지 확인
    //isNaN만 사용시에는 e가 붙으면 지수가 되기 때문에 다른 하나의 case에서 에러가 발생
    return s.split("").every((c) => !isNaN(c)); // 모든 요소가 number이면 true리턴
  } else {
    return false;
  }
}
