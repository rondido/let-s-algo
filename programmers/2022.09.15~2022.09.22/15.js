//이상한 문자열 만들기
function solution(s) {
  var answer = "";
  let arr = [];
  arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    // i 가 index인데 0을뽑으면 try가 나오는데?
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) {
        answer += arr[i][j].toUpperCase();
      } else {
        answer += arr[i][j].toLowerCase();
      }
    }
    if (i === arr.length - 1) {
      break;
    } else {
      answer += " ";
    }
  }
  return answer;
}

// 첫번째 map에서 공백을 기준으로 자른 s를 다시 map을 요소별로 하나씩 자른 후 또 다시 map으로 j,key 중 key인 index로 나머지 연산 사용하여 처리
//answer =  s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
// }
