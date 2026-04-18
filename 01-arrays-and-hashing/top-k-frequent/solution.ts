function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>();

    for(let num of nums) {
        if(map.has(num)) {
           map.set(num, map.get(num)! + 1) 
        } else {
            map.set(num, 1)
        }
    }

    return [...map.entries()] // [[1, 1], [2, 3], [3, 4]]
    .sort((a, b) => b[1] - a[1]) // [[3, 4], [2, 3], [1, 1]]
    .slice(0, k) // [[3, 4], [2, 3]]
    .map(([key, _value]) => key) // [3, 2]
 
};

console.log(topKFrequent([1, 2, 3, 3, 3, 3, 2, 2], 2))