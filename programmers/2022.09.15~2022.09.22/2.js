//제일 작은 수 제거하기

function solution(arr) {
  //   arr.splice(arr.indexOf(Math.min(...arr), 1));
  //   if(arr.length <= 1) return [-1];
  if (arr.length <= 1) return [-1];
  let min;
  //rudce로 자릿수 합만이 아닌 새로운 배열을 반환
  arr.reduce((a, b) => {
    min = b > a ? a : b;
    console.log(min);
  });
  return arr.filter((e) => e !== min);
}

console.log(solution([4, 3, 2, 1]));
