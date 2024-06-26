function solution(num_list) {
  var answer = [];
  let Even = 0;
  let odd = 0;
  num_list.forEach((value) => {
    if (value % 2 === 0) {
      Even++;
    } else {
      odd++;
    }
  });
  answer.push(Even, odd);
  return answer;
}
