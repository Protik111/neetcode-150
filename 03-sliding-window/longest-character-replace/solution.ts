function characterReplacement(s: string, k: number): number {
  let left = 0;
  let maxLength = 0;
  let maxFrequency = 0;
  let frequency: Record<string, number> = {};

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    frequency[char] = (frequency[char] || 0) + 1;
    // {A: 2, B: 1}

    maxFrequency = Math.max(maxFrequency, frequency[char]);

    const currentWindowSize = right - left + 1;

    const replacements = currentWindowSize - maxFrequency;

    if (replacements > k) {
      frequency[s[left]]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

const s = "ABAB";
const k = 2;

console.log(characterReplacement(s, k)); // Output: 4
