// function recuresive(){
//     if 종료 조건을 만족한다면{
//         처리;
//     }
//     for 자식 노드를 하나씩 확인하며{
//         if 임의의 조건을 만족한다면{
//             자식 노드 방문 처리
//             재귀 함수 호출
//             자식 노드 방문 처리 해제
//         }
//     }
// }

let n = 8; //전체 맵의 크기
let queens = []; //현재 체스판에 놓인 퀸의 위치 정보들
function possible(x, y) {
  //(x,y) 위치에 퀸을 놓을 수 있는지 확인
  for (let [a, b] of queens) {
    //현재까지 놓았던 모든 퀸의 위치를 하나씩 확인하며
    if (a == x || b == y) return false; //행이나 열이 같다면 놓을 수 없음
    if (Math.abs(a - x) == Math.abs(b - y)) return false; //대각선에 위치한 경우 놓을 수 없음
  }
  return true;
}

let cnt = 0;
function dfs(row) {
  if (row == n) cnt += 1; //퀸을 N개 배치할 수 있는 경우 카운트
  for (let i = 0; i < n; i++) {
    if (!possible(row, i)) continue;
    queens.push([row, i]); //현재 위치에 퀸을 놓기
    dfs(row + 1); //재귀 함수 호출
    queens.pop(); //현재 위치에서 퀸을 제거하기
  }
}
dfs(0);
