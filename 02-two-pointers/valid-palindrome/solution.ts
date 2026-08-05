function isPalindrome(s: string): boolean {
  // "A man has"
  // true/false
  // two pointer

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }

    while (right > left && !isAlphaNumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphaNumeric(char: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(char);
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
