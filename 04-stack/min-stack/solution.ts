class MinStack {
  private stack: number[];
  private minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value: number): void {
    this.stack.push(value);

    if (this.minStack.length === 0) {
      this.minStack.push(value);
    } else {
      //always push the min value to the minStack array
      const minValue = Math.min(value, this.minStack[this.minStack.length - 1]);
      this.minStack.push(minValue);
    }
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
