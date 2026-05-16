// time complexity: O(n log n) due to sorting
// space complexity: O(1) if we ignore the space used by sorting, otherwise O(n)
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

  return Math.max(longest, current);
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4

// time complexity: O(n) due to the single pass through the set
// space complexity: O(n) due to the set storing all unique numbers
function longestConsecutiveWithoutSorting(nums: number[]): number {
  const set = new Set(nums);

  let longest = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longest = Math.max(longest, currentStreak);
    }
  }

  return longest;
}

console.log(longestConsecutiveWithoutSorting([100, 4, 200, 1, 3, 2])); // Output: 4
