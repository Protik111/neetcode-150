// O(n * k log k) time complexity
// O(n * k) space complexity

// function groupAnagrams(strs: string[]): string[][] {
//     const map = new Map<string, string[]>();
//     for(let i = 0; i < strs.length; i++) {
//         const sortedStr = strs[i].split("").sort().join("");
//         if(map.has(sortedStr)) {
//             map.get(sortedStr)!.push(strs[i])
//         } else {
//             map.set(sortedStr, [strs[i]])
//         }
//     }
//     return Array.from(map.values())
// };

// O(n * k) time complexity
// O(n * k) space complexity
function groupAnagramsOptimized(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const str of strs) {
    const count = new Array(26).fill(0); // [0, 0, 0, ...]

    for (const char of str) {
      count[char.charCodeAt(0) - 97]++; // [1, 0, 0, ...]
    }

    const key = count.join("#"); // unique signature "1#0#0#..."

    if (!map.has(key)) {
      map.set(key, []); // create new array if not exists
    }

    map.get(key)!.push(str); // push the string to the array
  }

  return Array.from(map.values());
}

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
