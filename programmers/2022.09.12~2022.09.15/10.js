//하샤드 수

function solution(x) {
  let s = x
    .toString()
    .split("")
    .reduce((a, b) => a + Number(b), 0);
  if (x % s === 0) return true;
  else return false;
}

//return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
