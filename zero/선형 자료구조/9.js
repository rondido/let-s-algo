//숫자 빈도수 구하기
/* 숫자 빈도수 구하기 */

/* user code */
function answer(s, e) {
  let result = [];

  for (let i = 0; i < 10; i++) {
    result[i] = 0;
  }
  let num;
  for (let i = s; i <= e; i++) {
    num = i;
    while (num != 0) {
      result[num % 10]++;
      num /= 10;
      num = parseInt(num);
    }
  }
  return result;
}

/* main code */
let input = [
  // TC: 1
  [129, 137],

  // TC: 2
  [1412, 1918],

  // TC: 3
  [4159, 9182],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
