function solution(s) {
  var answer = [];
  let value =[];
  
  for(let i=0; i<s.length; i++){
      if(!value.includes(s[i])){
          answer.push(-1);
          value.push(s[i])
      }
      else if(value.includes((s[i]))){
          answer.push(i-value.lastIndexOf(s[i]));
          value.push(s[i])
      }
  }           
  return answer;
}