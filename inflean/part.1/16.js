//중복 문자 제거
function solution(s) {
   // let answer = "";
    //첫번째 발견한 index 값을 return
    //두번째 인자에는 기준을 정할 수 있음
    //없는 값을 탐색 시에는 -1 return
    // for (let i=0; i<s.length; i++){
    //     if(s.indexOf(s[i]) === i){
    //         answer +=s[i]; 
    //     }   
    // }
    let answer =0;
    let pos=s.indexOf('k');
    while(pos!== -1){
        answer++;
        pos=s.indexOf('k', pos+1);
    }
    return answer;
}

console.log(solution("ksekkset"));