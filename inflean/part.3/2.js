//유효한 팰린드롬(회문문자열)
function solution(s) {
    let answer = "YES";
    //^ == 부정
    s= s.toLowerCase().replace(/[^a-z]/g, '')
    if(s.split('').reverse().join('') !== s) return "NO";

    return answer;
}

let str = "found7, time: study; Yduts; emit, 7DnuoF";
console.log(solution(str));
