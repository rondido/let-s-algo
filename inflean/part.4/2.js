//뒤집은 소수
function isPrime(num){
    if(num===1) return false;
    //Math.sqrt() 제곱근
    for(let i=2; i<=parseInt(num/2); i++){
        if(num%i===0) return false;
    }
    return true;
}

// function solution(arr) {
//     let answer = [];      
//     for(let x of arr){
//         let res = 0;
//         while(x){
//             let t =x%10;
//             res = res*10+t;
//             x = Math.floor(x/10);
//         }
//         if(isPrime(res)) answer.push(res);
//     }    
//     return answer;
// }

function solution(arr) {
    let answer = [];      
    for(let x of arr){
        let res = Number(x.toString().split('').reverse().join(''));
        if(isPrime(res)) answer.push(res);
    }    
    return answer;
}


let arr = [
    32,
    55,
    62,
    20,
    250,
    370,
    200,
    30,
    100
];
console.log(solution(arr));
