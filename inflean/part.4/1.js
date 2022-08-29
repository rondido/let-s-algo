//자릿수 의합
// function solution(n, arr) {
//     let answer, max = Number.MIN_SAFE_INTEGER;
//     for(let x of arr){
//         let sum =0, tmp=x;
//         while(tmp){
//             sum +=(tmp%10);
//             tmp = Number.parseInt(tmp/10);            
//         }
//         if(sum > max){
//             max = sum;
//             answer =x;
//         }
//         else if(sum === max){
//             if(x > answer){
//                 answer = x;

//             }
//         }

//     }   
//     return answer;
// }

function solution(n, arr) {
    let answer, max = Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        let sum =x.toString().split('').reduce((a,b) => a + Number(b),0);
     
        if(sum > max){
            max = sum;
            answer =x;
        }
        else if(sum === max){
            if(x > answer){
                answer = x;
                
            }
        }

    }   
    return answer;
}

let arr = [
    128,
    460,
    603,
    40,
    521,
    137,
    123
];
console.log(solution(7, arr));
