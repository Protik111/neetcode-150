function minWindow(s: string, t: string): string {
  if (t.length > s.length) return "";

  const required: Record<string, number> = {};
  const window: Record<string, number> = {};

  // Count characters required from t
  for (const char of t) {
    required[char] = (required[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;

  let have = 0;
  const need = Object.keys(required).length;

  let minLength = Infinity;
  let minStart = 0;

  while (right < s.length) {
    const char = s[right];

    window[char] = (window[char] || 0) + 1;

    // We only increase `have` when we have
    // exactly enough of this character.
    if (required[char] !== undefined && window[char] === required[char]) {
      have++;
    }

    // Window is valid
    while (have === need) {
      // Update minimum window
      const currentLength = right - left + 1;

      if (currentLength < minLength) {
        minLength = currentLength;
        minStart = left;
      }

      // Remove left character
      const leftChar = s[left];

      window[leftChar]--;

      if (
        required[leftChar] !== undefined &&
        window[leftChar] < required[leftChar]
      ) {
        have--;
      }

      left++;
    }

    right++;
  }

  return minLength === Infinity
    ? ""
    : s.substring(minStart, minStart + minLength);
}
