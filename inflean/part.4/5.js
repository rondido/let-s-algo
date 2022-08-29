//K번째 큰 수
//경우의 수
function solution(n, k, card) {
    let answer;
    let tmp = new Set();
    //3개 뽑아주는 조합
    for(let i=0; i<n-2; i++){
        for(let j=i+1; j<n-1; j++){
            for(let k=j+1; k<n; k++){
                tmp.add(card[i]+card[j]+card[k]);
            }
        }
    }
    let a = Array.from(tmp).sort((a,b)=>b-a);
    //매개변수의 k
    answer = a[k-1];
    return answer;
}

let arr = [
    13,
    15,
    34,
    23,
    45,
    65,
    33,
    11,
    26,
    42
];
console.log(solution(10, 3, arr));
