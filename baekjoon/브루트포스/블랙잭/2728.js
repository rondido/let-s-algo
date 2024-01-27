const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");


const N = input[0].split(" ")[0];
const base = +input[0].split(" ")[1];
const M = input[1].split(" ").map((el)=>+el);
let result = 0;

for(let i=0; i<N; i++){
    for(let j =i+1; j<N-1; j++){
        for(let k=j+1; k<N; k++){
            const sum = M[i] + M[j] + M[k]
            const gap = base - sum
            if(gap >=0 && result <= sum){
                result = sum;
            }
        }
    }
}
console.log(result)