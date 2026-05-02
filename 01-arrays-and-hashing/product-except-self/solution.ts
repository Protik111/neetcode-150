// O(n^2) time complexity
// function productExceptSelf(nums: number[]): number[] {
//   const answers: number[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     let product = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         product *= nums[j];
//       }
//     }

//     answers[i] = product;
//   }

//   return answers;
// }

// O(n) time complexity
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  let answer = new Array(n).fill(1);

  //prefix
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1] || 1;
  }

  //suffix
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= right;
    right *= nums[i];
  }

  return answer;
}

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // [24, 12, 8, 6]
