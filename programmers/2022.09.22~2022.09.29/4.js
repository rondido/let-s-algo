//최소 직사각형

function solution(sizes) {
  var answer = 0;
  let max_2 = -100000;
  let max_1 = -100000;

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      sizes[i].reverse();
    }
    if (max_1 < sizes[i][0]) {
      max_1 = sizes[i][0];
    }
    if (max_2 < sizes[i][1]) {
      max_2 = sizes[i][1];
    }
  }
  answer = max_1 * max_2;
  return answer;
}
