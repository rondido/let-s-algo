//중복 단어 제거
function solution(s) {
    let answer;
    // v는 value
    // i는 index
    answer = s.filter((v,i) =>{
        if(s.indexOf(v) === i) return true;
        
    });

    return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
