//A를 #으로

function solution(s) {
    //let answer = "";
    // for (let x of s) {
    //     if (x === 'A') {
    //         answer += "#";
    //     } else {
    //         answer += x;
    //     }

    // }
    let answer =s;
    //지금 상태는 1개만 바뀐다 첫번째
    //s=s.replace(/A/, '#');
    answer=s.replace(/A/g, '#');
    return answer;
}

let str = "BANANA";
console.log(solution(str));
