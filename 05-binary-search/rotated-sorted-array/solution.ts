function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  let minimum;

  while (left < right) {
    const mid = Math.floor((right + left) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}
