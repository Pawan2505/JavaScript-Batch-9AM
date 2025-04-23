let nums = [1, 2, 2, 3, 3, 3, 4];
let freq = {};

for (let i = 0; i < nums.length; i++) {
  let val = nums[i];
  freq[val] = (freq[val] || 0) + 1;
}

console.log("Frequency Count:", freq);
