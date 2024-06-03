function solution(array, n) {
  var answer = 0;
  array.map((value) => {
    if (value === n) answer++;
  });
  return answer;
}

//  return array.filter(v=>v===n).length;
