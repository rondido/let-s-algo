// 오름차순 정렬()

/**
 * @param {array} plans
 * @return {int}
 */
function solution(plans) {
  let answer = 0;

  for (let i = plans.length - 2; i >= 0; i--) {
    if (plans[i + 1] === 0) {
      return -1;
    }
    while (plans[i] >= plans[i + 1]) {
      answer++;
      plans[i] = Math.floor(plans[i] / 2);
    }
  }
  return answer;
}

console.log(solution([5, 3, 2, 1]));
