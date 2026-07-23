// O(n log n) time complexity
// O(n) space complexity

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();

  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num)! + 1);
    } else {
      map.set(num, 1);
    }
  }

  return [...map.entries()] // [[1, 1], [2, 3], [3, 4]]
    .sort((a, b) => b[1] - a[1]) // [[3, 4], [2, 3], [1, 1]] sort by frequency
    .slice(0, k) // [[3, 4], [2, 3]]
    .map(([key, _value]) => key); // [3, 2]
}

function topKFrequentBucketSort(nums: number[], k: number): number[] {
  const freqMap = new Map<number, number>();

  // Step 1: count frequency O(n)
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1); // Map(3) { 1 => 1, 2 => 3, 3 => 4 }
  }

  // Step 2: buckets O(n)
  const buckets: number[][] = Array(nums.length + 1)
    .fill(null)
    .map(() => []); // [ [], [], [], [], [], [], [], [], [] ]

  // Step 3: fill buckets
  for (const [num, freq] of freqMap) {
    buckets[freq].push(num); //buckets [ [], [ 1 ], [], [ 2 ], [ 3 ], [], [], [], [] ]
  }

  // Step 4: collect top k O(n)
  const result: number[] = [];

  for (let i = buckets.length - 1; i >= 0; i--) {
    for (const num of buckets[i]) {
      result.push(num);
      if (result.length === k) {
        return result;
      }
    }
  }

  return result;
}

console.log(topKFrequent([1, 2, 3, 3, 3, 3, 2, 2], 2));
// console.log(topKFrequentBucketSort([7, 7, 5, 7, 5, 6], 2))
