function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; //가장 작은 원소의 인덱스
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
      let temp = arr[i]; //스와프
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
}

const input = require("fs")
  .readFileSync("memo.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input[0].split(" ").map(Number);

selectionSort(arr);

let answer = "";

for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + " ";
}

console.log(answer);
