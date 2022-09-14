//two pointers

/**
 * @param stats {array}
 * @param k {int}
 * @return int
 */
function solution(stats, k) {
  stats.sort(function (a, b) {
    return a - b;
  });
  var m = new Map();
  for (var i = 0; i < stats.length; i++) {
    if (m.has(stats[i])) {
      m.set(stats[i], m.get(stats[i]) + 1);
    } else {
      m.set(stats[i], 1);
    }
  }
  var b = Array.from(m.entries());
  n = b.length;
  var maxL = 0,
    maxR = 0;
  var max = 0;
  var l = 0;
  var r = 0;
  var prev = b[0][0] - 1;
  while (l < n) {
    while (b[r][1] >= k && b[r][0] === prev + 1) {
      console.log(b[r][1], k, b[r][0], prev);
      prev = b[r][0];
      r++;
      if (r === n) break;
    }
    if (r - l > max) {
      maxR = b[r - 1][0];
      maxL = b[l][0];
      max = r - l;
    }
    if (r === n) break;
    l = b[r][1] >= k ? r : r + 1;
    r = l;
    if (r === n) break;
    prev = b[r][0] - 1;
  }
  return max ? maxL + maxR : -1;
}

console.log(solution([11, 11, 12, 13, 13, 14, 14], 2));
