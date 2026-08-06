function threeSum(nums: number[]): number[][] {
  //sort nums array
  //fixed a number
  //take left and right position
  //iterate the items
  // add them and return

  //cautious:
  //check duplicacy

  //Input:
  //[-1,0,1,2,-1,-4]

  const sortedNum = nums.sort((a, b) => a - b);
  //[-4,-1,-1,0,1,2]
  const firstNum = sortedNum[0];
  let left = 1;
  let right = sortedNum.length - 1;
  for (let i = 0; i < sortedNum.length; i++) {
    if (i > 0 && sortedNum[i] === sortedNum[i - 1]) {
      continue;
    }
  }
}
