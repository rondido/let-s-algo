//가위바위보
function solution(a, b) {
    let answer = "";
    for(let i =0; i<a.length; i++){
        //a의 값과 b의 값을 비교할때 난해함
        //a의 값과 b의 값에 대해 생각하지말고
        //a가 어떤경우에 이길 건지에 대해생각후 a의 값만 비교해주고 이외의 경우에는 b가 이긴다고 가정
        if(a[i]  == 1 && b[i] == 3){
            answer += "A";
        }
        else if(a[i]  == 2 && b[i] == 1){
            answer += "A";
        }
        else if(a[i]  == 3 && b[i] == 2){
            answer += "A";
        }
        else if(a[i] === b[i]){
            answer +="D";
        }else{
            answer +="B";
        }        
    }
    return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
