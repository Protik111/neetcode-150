function maxArea(height: number[]): number {
  //Input: [1,8,6,2,5,4,8,3,7]
  //Output: 49
  //define left and right
  //define maxArea
  //iterate nums
  //find height
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let width = right - left;
    let ht = Math.min(height[left], height[right]);

    let currentArea = width * ht;

    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
