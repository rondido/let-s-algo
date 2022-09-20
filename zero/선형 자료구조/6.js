/* two sum */

/* user code */

// for 문  -> o(n^2)
function answer(nums, target) {
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] + nums[j] === target) {
  //         return [i, j];
  //       }
  //     }
  //   }
  let map = new Map(); //key,map
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] != undefined) {
      return [map[target - nums[i]], i];
    }

    map[nums[i]] = i;
  }
  return [];
}

/* main code */
let input = [
  // TC: 1
  [[2, 7, 11, 15], 9],

  // TC: 2
  [[3, 2, 4], 6],

  // TC: 3
  [[3, 3], 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
