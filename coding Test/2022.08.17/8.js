//그리디
//경찰과 도둑 도둑이 몇명이나 도망갈 수 있는지

/**
 * @param {int} n
 * @param {int} k
 * @param {array} thieves
 * @return {int}
 */
function solution(n, k, theives) {
  let police = 0;
  let answer = 0;
  theives.sort((a, b) => b - a);
  for (let i = 0; i < k; i++) {
    if (police >= theives[i]) break;
    police = police + n - theives[i];
    answer++;
  }
  return answer;
}

console.log(solution(10, 6, [8, 7, 5, 4, 9, 4]));
