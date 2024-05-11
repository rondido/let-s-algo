function solution(s1, s2) {
  return s1.filter((value) => s2.includes(value)).length;
}
