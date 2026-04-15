// O(n^2) time complexity
// O(1) space complexity

function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length; i++) {
        let currentElement = nums[i];

        for(let j = i + 1; j < nums.length; j++) {
            if(currentElement + nums[j] === target) {
                return [i ,j]
            }
        }
    }
    return []
};


// O(n) time complexity
// O(n) space complexity
// function twoSum(nums: number[], target: number): number[] {
//     const map = new Map();

//     for(let i = 0; i < nums.length; i++) {
//         const calculatedNum = target - nums[i];
//         if(map.has(calculatedNum)) {
//             return [map.get(calculatedNum), i]
//         } else {
//             map.set(nums[i], i)
//         }
//     }
//     return []
// };

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))