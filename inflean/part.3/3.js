//숫자만 추출하기
function solution(str) {
    let answer = "";
    for(let x of str){
        //isNaN은 숫자인지 판별
        //자연수로 반환해야하기 떄문에 parseint로 변환
        if(!isNaN(x)) answer +=x;
    }
    return Number.parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
