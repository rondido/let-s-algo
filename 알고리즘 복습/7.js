//끝에 일의 자리를 구하고 싶으면 무조건 10으로 나눈 나머지 값은 일의자리로 남는다
function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 === day) {
      answer++;
    }
  }
  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
