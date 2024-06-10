function solution(numbers, direction) {
  var answer = [...numbers];

  if (direction === "right") {
    const moc = answer.pop();
    answer.unshift(moc);
  } else {
    const moc = answer.shift();
    answer.push(moc);
  }
  return answer;
}
