/* 달팽이 만들기 */

/* user code */
function answer(length) {
  let result = [];

  // 1. result -> 2차원 배열
  //[[],[],[]]
  for (let i = 0; i < length; i++) {
    result[i] = [];
  }
  /*
    2. 반복문 패턴 구현
    1) length 길이만큼 시작해서 숫자를 채워준다.
    2) length - i, 방향, 2회
    3) length ==0, 프로그램이 멈춘다.
  */
  let direction = 1;
  let num = 0;
  let x = 0;
  let y = 0;

  x--;
  while (1) {
    for (let i = 0; i < length; i++) {
      x += direction;
      result[y][x] = ++num;
    }
    length--;

    if (length === 0) break;

    for (let j = 0; j < length; j++) {
      y += direction;
      result[y][x] = ++num;
    }
    direction *= -1;
  }
  return result;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  6,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
