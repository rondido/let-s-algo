const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");
  
let stick = [];
let answer =0
  
for(let i=0;i<input.length; i++){
    if(input[i] ==="(" && input[i+1] === ")"){
        answer += stick.length;
        i++;
    }
    else if(input[i] === "("){
        console.log(input[i],i)
        stick.push(input[i])
    }
    else if(input[i] === ")"){
        stick.pop();
        answer +=1;
    }
}
console.log(answer);