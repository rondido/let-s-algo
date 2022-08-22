//1부터 N까지 합 출력하기

function solution(n) {
    let answer = 0;
    for(let i = 1; i <=n; i++){
        answer +=i;
    }

    return answer;
}

console.log(solution(10));
