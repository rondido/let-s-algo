function solution(array) {
  var answer = 0;
  const value = array.sort((a, b) => a - b);
  const moc = Math.floor(array.length / 2);
  answer = array[moc];
  return answer;
}
//  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
