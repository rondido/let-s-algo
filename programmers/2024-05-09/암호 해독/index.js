function solution(cipher, code) {
  var answer = "";
  for (let i = 0; i < cipher.length; i++) {
    if (code * (i + 1) <= cipher.length) {
      let moc = code * (i + 1);
      answer += cipher[moc - 1];
    }
  }
  return answer;
}


// 다른 사람 풀이
//    return cipher.split('').filter((_, index) => (index + 1) % code === 0).join('');
