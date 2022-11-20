function solution(s) {
  let answer = "YES";
  //   let w = s.toLowerCase().split("").reverse().join("");
  //   if (w !== s.toLowerCase()) {
  //     answer = "NO";
  //   }
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    //s의 길이가 4 i가 0일때 -1을 해줌으로써 s의 제일 마지막값을 찾는다.
    if (s[i] !== s[len - i - 1]) {
      return "NO";
    }
  }
  return answer;
}

let str = "gooG";
console.log(solution(str));
