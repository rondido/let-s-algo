//가위바위보
//1:가위 2:바위 3: 보
//경우를 잡을때는 하나를 기준으로 여러 경우를 가져온다.
function solution(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += "D" + " ";
    else if (a[i] === 1 && b[i] === 3) answer += "A" + " ";
    else if (a[i] === 2 && b[i] === 1) answer += "A" + " ";
    else if (a[i] === 3 && b[i] === 2) answer += "A" + " ";
    else answer += "B" + " ";
  }
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
