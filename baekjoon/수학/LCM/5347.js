const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = input.shift();


for(let i =0; i<num; i++){
   const [a,b] = input[i].split(" ").map(Number);
   console.log((a*b/gcd(a,b)))
}

 
function gcd(a,b){
    let mod;
    while((mod = a % b) >0){
        [a,b] = [b,mod]
        mod = a % b;
    }
    return b;
} 


//주어진 두 수 사이의 최소공배수를 구하는 것은 주어진 두 수를 곱한 값을 두 수의 최소 공약수로 나누어 구한다.
 