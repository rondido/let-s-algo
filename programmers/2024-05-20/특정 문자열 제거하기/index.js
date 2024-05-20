function solution(my_string, letter) {
  return my_string
    .split("")
    .filter((value) => value !== letter)
    .join("");
}

//   const answer = my_string.split(letter).join('')
