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
