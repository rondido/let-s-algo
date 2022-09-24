//예산
function solution(d, budget) {
  var answer = 0;
  let n = d.length;
  let arr = d.sort((a, b) => a - b);
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    // d의 값을 sum에 누적해서 budget보다 크면
    // cnt++ 해주고 다시 더한다
    // 계속 더해주고 cnt++ 해주면서 9보다 커지면 멈추고 cnt 값을 반환한다?
    //끝까지 돌기전에 9랑 같은 숫자가 나오고 많으면 멈춰서 그다음의 갯수 잇는지 확인이 불가하다.
    //2. budget를 비교해서 d의 배열에서 제일 최소값만 계쏙 누적으로 빼주면서 뺸 값이 d의 배열에 같은 값이
    //또 빼주면서 같은 값이 없을떄까지 계속 비교한다.
    if (d[i] <= budget) {
      budget = budget - d[i];
      // 9 = 9 -1
      // 8
      cnt++;
    } else if (budget < d[i]) {
      break;
    }
  }
  answer = Math.max(answer, cnt);
  return answer;
}
