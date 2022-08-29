//등수 구하기
function solution(arr) {
    let n = arr.length;
    let answer = Array.from({length:n},()=>1);
    console.log(answer);
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(arr[j] > arr[i]){
                console.log(arr[i],arr[j]);
                answer[i]++;
            }
        }
    }
    return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
