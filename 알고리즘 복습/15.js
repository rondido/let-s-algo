function solution(s) {
    let answer = "";
    let mid = Math.floor(s.length / 2);
    if (s.length % 2 == 1) answer = s.substr(mid, 1);
    else answer = s.substr(mid - 1, mid + 1);
    return answer;
}
console.log(solution("study"));
