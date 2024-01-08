function solution(t, p) {
  var answer = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    console.log(t.length - p.length + 1);
    let slice = t.slice(i, i + p.length);
    if (slice <= p) {
      answer++;
    }
  }
  return answer;
}
