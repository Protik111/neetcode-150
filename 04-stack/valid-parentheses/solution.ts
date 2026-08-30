function isValid(s: string): boolean {
  //input: "()[{}]"
  if (s.length % 2 !== 0) return false;

  const stack: string[] = [];

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;

      const top = stack.pop();

      if (
        (char === ")" && top !== "(") ||
        (char === "}" && top !== "{") ||
        (char === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid("()")); // true
