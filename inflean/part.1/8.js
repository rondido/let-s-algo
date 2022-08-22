//일곱 난쟁이
function solution(arr) {
    let answer = arr;
    //누적
    //b를 a에 누적 a를 0으로 초기화
    let sum = arr.reduce((a,b)=>a+b,0);
    for(let i=0; i<8; i++){
        for(let j=i+1; j<9; j++){
            if((sum - (arr[i]+ arr[j]))===100){
                //splice 배열의 특정 index값을 삭제
                //i를 먼저 제거 시 위에 있던 index의 value값이
                //떙겨지기 때문에 j먼저 삭제 후 i를 제거
                arr.splice(j,1);
                arr.splice(i,1);
            }
        }
    }

    return answer;
}

let arr = [
    20,
    7,
    23,
    19,
    10,
    15,
    25,
    8,
    13
];
console.log(solution(arr));
