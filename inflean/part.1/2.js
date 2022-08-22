//삼각형 판별하기
function solution(a, b, c) {
    let answer="YES",max;
    let sum = a+b+c;    
    if(a > b) max = a;
    else max = b;  
    if(c > max) max = c;
    if((sum-max) <= max) answer="NO"; //두수의 합    
    return answer;
}
console.log(solution(6,7,11));
