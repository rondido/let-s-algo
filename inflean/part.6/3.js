//크리인 인형뽑기
function solution(board, moves) {
  let answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {}
  }

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
