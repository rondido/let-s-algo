//대문자 찾기

function solution(s) {
    let answer = 0;
    for(let x of s){        
        //아스키코드로 변환
        //아스키코드는 대문자: A:65 ~ Z:90
        //아스키코드는 소문자: a:97 ~ z:122
        //let num =x.charCodeAt();
        //if(num >= 65 && num <=90) answer++;
        if(x === x.toUpperCase()) answer++;
     }
    return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
