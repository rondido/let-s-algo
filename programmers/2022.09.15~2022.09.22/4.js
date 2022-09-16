//음양 더하기

function solution(absolutes, signs) {
  var answer = 0;
  //signs false : -
  //signs true : +
  // + - +
  // - - +
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] == true) {
      answer = answer + absolutes[i];
    } else {
      answer = answer - absolutes[i];
    }
  }

  return answer;

  //return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
