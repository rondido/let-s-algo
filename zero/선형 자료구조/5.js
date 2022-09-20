/* 나무 그리기 */

/* user code */
function answer(height) {
  let str = "\n";

  for (let i = 0; i < height; i++) {
    // 1. 공백 처리 " "
    for (let j = 0; j < height - i - 1; j++) {
      str += " ";
    }

    // 2. * 처리 "*" 2n + 1
    for (let j = 0; j < i * 2 + 1; j++) {
      str += "*";
    }

    // 3. 개행문자 추가
    str += "\n";
  }

  return str;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  7,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
