//멘토
//경우의 수
//블루투포스
function solution(test) {
    let answer = 0, tmp=[];
    m=test.length;
    n=test[0].length;
    // m은 테스트 횟수
    // n은 학생 수

    for(let i = 1; i<=n; i++){
        for(let j=1; j<=n; j++){
            let cnt =0;
            for(let k = 0; k<m; k++){
                let pi=pj=0;
                for(let s =0; s<n; s++){
                    if(test[k][s]===i) pi = s;
                    if(test[k][s]===j) pj = s;
                }
                if(pi<pj) cnt++;
            }
            if(cnt===m) {
                tmp.push([i,j]);
                answer++;
            }
        }
    }
    console.log(tmp);
    return answer;
}

let arr = [
    [
        3, 4, 1, 2
    ],
    [
        4, 3, 2, 1
    ],
    [
        3, 1, 4, 2
    ]
];
console.log(solution(arr));
