function solution(n) {
  let answer;
  function DFS(L) {
    if (L > 7) return;
    else {
      //console.log(L); //전위 순회
      DFS(L * 2); // 왼쪽
      //console.log(L); //중위 순회
      DFS(L * 2 + 1); // 오른쪽
      console.log(L); //후위 순회
    }
  }
  DFS(n);
  return answer;
}
console.log(solution(1));
