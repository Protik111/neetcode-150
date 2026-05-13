function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);

  let longest = 1;
  let current = 1;

  for (let i = 1; i < nums.length; i++) {
    //if duplicate then continue
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    if (nums[i] === nums[i - 1] + 1) {
      current++;
    } else {
      longest = Math.max(longest, current);
      current = 1;
    }
  }
  console.log(longest, current);

  return Math.max(longest, current);
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
