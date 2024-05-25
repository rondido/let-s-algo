function solution(num, k) {
  return (
    num
      .toString()
      .split("")
      .map((value) => Number(value))
      .indexOf(k) + 1 || -1
  );
}
