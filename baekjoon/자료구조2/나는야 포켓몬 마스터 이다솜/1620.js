const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ");
const poketmon = input.slice(0, +n);

const quest = input.slice(+n);
const map = new Map(poketmon.map((poketmons, index) => [poketmons, index + 1]));
quest.forEach((quest) => {
  if (Number.isNaN(+quest)) console.log(map.get(quest));
  else console.log(poketmon[+quest - 1]);
});
