//부족한 금액 계산하기

function solution(price, money, count) {    
    let answer = 0;
    let result = [];
    //result 총 횟수의 숫자
    //answer가 총합의 값
    //money 현재 가지고 있는 값
    //price 이용료
    //count가 타고 싶은 횟수
    for(let i =1; i<=count; i++){
        result.push(answer += price);
    }    
    answer = result.reduce((a,b) => a+b, 0);
    
    return answer < money ? 0 : answer - money;
}

// 가우스 공식
//    const tmp = price * count * (count + 1) / 2 - money;
