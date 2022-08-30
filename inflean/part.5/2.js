//공통원소 구하기
function solution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;
  let n = arr1.length;
  let m = arr2.length;
  //p1의 값이 arr1.length의 길이를 넘어버리면 거짓이므로 while에서 나옴
  //p2의 값이 arr2.length의 길이를 넘어버리면 거짓이므로 while에서 나옴
  while (p1 < n && p2 < m) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
