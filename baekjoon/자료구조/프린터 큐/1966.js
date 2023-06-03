const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, ...arr] = input;

function solution(n, arr) {
  for (let i = 0; i < n; i++) {
    let count = 1;
    let M = Number(arr[i * 2].split(" ")[1]);
    let queue = arr[i * 2 + 1].split(" ").map((i) => Number(i));

    while (1) {
      const Item = queue.shift();
      if (Math.max(...queue) < Item && M === 0) {
        console.log(count);
        break;
      } else if (Math.max(...queue) > Item && M === 0) {
        queue.push(Item);
        M = queue.length - 1;
      } else if (Math.max(...queue) > Item) {
        queue.push(Item);
        M -= 1;
      } else if (Math.max(...queue) < Item) {
        count += 1;
        M -= 1;
      }
    }
  }
}

solution(n, arr);
