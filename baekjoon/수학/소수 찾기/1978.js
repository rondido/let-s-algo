const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim();
  
const [num,result] = input.split("\n");
let count = 0;

function isPrime(num){
    if(num == 1) return false;
    for(let i = 2; i<=Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}  

console.log(result.split(" ").filter(v=>isPrime(v)).length);
