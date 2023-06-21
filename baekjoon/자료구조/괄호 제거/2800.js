const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input.shift());

const A = input.shift().split(" ")

const m = parseInt(input.shift());

const B = input.shift().split(" ")

A.sort((a,b)=>a-b);

B.forEach((v)=>{
    let l = 0;
    let r = A.length;
    let res = 0;
    while(l<=r){
        let mid = parseInt((l+r)/2)
        if(v === A[mid]){
            res = 1;
            break;
        }else if(v < A[mid]){
            r = mid-1;
            
        }else{
            l = mid+1
        }
    }
    console.log(res)
})
