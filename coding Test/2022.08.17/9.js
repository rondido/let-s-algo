//reward
//백트래킹
/**
 * @param {array} rewards
 * @param {int} k
 * @return {array}
 */
function solution(rewards, k) {
  let result = Infinity;
  let students = Array(k).fill(0);
  console.log(students);
  function backtrack(i) {
    if (i >= rewards.length) {
      let max = -Infinity;
      for (let b of students) max = Math.max(max, b);
      result = Math.min(result, max);
      return;
    }
    for (let j = 0; j < k; j++) {
      students[j] += rewards[i];
      backtrack(i + 1);
      students[j] -= rewards[i];
    }
  }

  backtrack(0);

  return result;
}

console.log(solution([6, 1, 3, 2, 2, 4, 1, 2], 3));
