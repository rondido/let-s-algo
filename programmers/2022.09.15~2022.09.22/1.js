//핸드폰 문자열 바꾸기

function solution(phone_number) {
  let bk = phone_number.substr(-4, 4);

  let ft = phone_number.substring(0, phone_number.length - 4);
  // 0-9는 숫자 0의 9를 의미한다.
  let result = ft.replace(/[0-9]/g, "*");

  return result + bk;
}
