//문자 찾기
function solution(s, t) {
    //let answer = 0;
    // for(let i =0; i<s.length; i++){
    //     if(s[i]===t){
    //         answer++;
    //     }
    // }
    //R을 구분자로 사용
    //[ 'COMPUTE', 'P', 'OG', 'AMMING' ]
    //만약 끝부분에도 R을 사용하면 빈자문열이 생김
    //[ 'COMPUTE', 'P', 'OG', 'AMMING', '' ]
    let answer = s.split(t).length;
    return answer -1;   
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));
