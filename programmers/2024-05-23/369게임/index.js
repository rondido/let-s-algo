function solution(order) {
  var answer = 0;
  const value = order.toString().split("");
  for (let i = 0; i < value.length; i++) {
    if (
      Number(value[i]) === 3 ||
      Number(value[i]) === 6 ||
      Number(value[i]) === 9
    )
      answer++;
  }
  return answer;
}

//    var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
