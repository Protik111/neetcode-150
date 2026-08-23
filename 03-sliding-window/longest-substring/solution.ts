function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let highestLength = 0;
  const set = new Set<string>();

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);

    const length = right - left + 1;
    highestLength = Math.max(highestLength, length);
  }

  return highestLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
