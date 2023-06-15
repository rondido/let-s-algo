let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let alphabet of croatia) {
  input = input.split(alphabet).join("1");
}
console.log(input.length);
