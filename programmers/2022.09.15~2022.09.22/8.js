//내적

function solution(a, b) {
  var answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
  //첫번째 인자 누적 연산
  //두번째 인자 현재 값
  //세번째 인자 index
  // return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
