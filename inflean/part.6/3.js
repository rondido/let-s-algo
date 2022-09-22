//크리인 인형뽑기
function solution(board, moves) {
  let answer = 0;
  let stack = [];

  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      //인형뽑기에서 인형을 뽑는다.
      if (board[i][pos - 1] !== 0) {
        //인형뽑기에서 뽑아온 인형을 tmp에 넣어주고
        //인형뽑기 안에는 뽑아온 인형의 위치를 0으로 초기화 시킨다.
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        //인형뽑기에서 뽑아온 값과 stack 바구니에 제일 끝에 있는 값이 같으면 터트린다.
        if (tmp == stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });
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
