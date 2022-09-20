/* OX 퀴즈 */

/* user code */
function answer(mark) {
  let result = 0;
  //   let cnt = 0;
  //   for (let x of mark) {
  //     if (x == 1) {
  //       cnt++;
  //       result += cnt;
  //     } else {
  //       cnt = 0;
  //     }
  //   }
  let score = 0;
  for (let i = 0; i < mark.length; i++) {
    if (mark[i] === 1) {
      result += ++score; //1
    } else {
      score = 0;
    }
  }
  /*
     0 ->1 : result(1), score(1);
     1 -> 0 :result(0), score(0);
     2 -> 1: result(2), score(1)
     3 - > 1:reuslt(4), score(2)
    */
  return result;
}

/* main code */
let input = [
  // TC: 1
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],

  // TC: 2
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],

  // TC: 3
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
