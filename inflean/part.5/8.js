//애나 그램
//sliding window tow pointers hash Map

//sh,th 두개의 맵이 같은지 아닌지 판별
function compareMaps(map1, map2) {
  //map1.size는 키의 종류
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    //key의 값은 map1 있는 값
    //밑에서의 key값은 map2의 key에 해당하는 value값
    //val은 map1의 value 값
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}
function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1;
  // b,a
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  //two pointer
  // sliding window
  //밑에 포문에서 3번째값인c를 추가 if(compareMaps에서 비교) sH,tH가 같은지 비교
  for (let rt = len; rt < s.length; rt++) {
    //추가
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    //비교
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    //map의 키에 해당하는 value 값이 0이면 삭제 후 rt로 한칸앞으로 이동
    //lt가 rt를 따라가는 형식
    //빼기
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
