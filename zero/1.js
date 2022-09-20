//등차수열의 항 찾기
// 입력은 초항 a, 인접한 차이 d, 찾는항의 수n, n값에 해당하는 항 번호를 반환

function answer(a, d, n) {
  //등차 수열

  //   let result = [a];
  //   let answer = 0;
  //   for (let i = a; i < n; i++) {
  //     result.push((a += d));
  //   }
  //   if (result.indexOf(n) === -1) {
  //     return -1;
  //   } else {
  //     answer = result.indexOf(n) + 1;
  //   }
  //   let index = -1;

  let num = 0;
  for (let i = 1; i <= n; i++) {
    num = a + d * (i - 1);
    if (num > n) {
      index = -1;
      break;
    }
    if (num === n) {
      index = i;
      break;
    }
    console.log(num);
  }
  let index = -1;
}

let input = [
  [1, 2, 7],

  [2, 3, 10],

  [3, 5, 23],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
