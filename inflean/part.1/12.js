//대문자로 통일
function solution(s) {
    let answer = "";
    for (let x of s){
        let num = x.charCodeAt();
        //대문자 와 소문자 사이의 간격은 32
        //아스키코드를 문자열로 변환 String.fromCharCode
        if(num >= 97 && num <=122) answer += String.fromCharCode(num-32);
        else answer +=x;

        // if(x === x.toLowerCase()) answer += x.toUpperCase();
        // else{
        //     answer +=x;
        // }
    }
    
    return answer;

}

let str = "ItisTimeToStudy";
console.log(solution(str));
