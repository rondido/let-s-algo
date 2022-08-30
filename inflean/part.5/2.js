//공통원소 구하기
function solution(arr1, arr2) {
    let answer = [];
    arr1.sort((a,b)=> a-b);
    arr2.sort((a,b)=> a-b);
    let m = arr1.length;
    let n = arr2.length;    
    let p1=p2=0;
    while(p1 < m && p2 <n){
        if(arr1[p1] === arr2[p2]) {
            answer.push(arr1[p1++]);            
            p2++;
        }else if(arr1[p1]< arr2[p2]) p1++;
        else p2++;
    }
    return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
