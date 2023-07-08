const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
input.shift();  
let result = input.map(Number);
let answer =[];

function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i =2; i<=Math.sqrt(n); i++){
        if(n % i ===0) return false;
    }
    return true;
}

while(result.length !=0){
    if(isPrime(result[0])){
        answer.push(result[0]);
        result.shift()
    }else{
        result[0]++;
    }
}

console.log(answer.join("\n"))

