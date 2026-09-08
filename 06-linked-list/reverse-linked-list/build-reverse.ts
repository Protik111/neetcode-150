class Node {
  value: number;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function buildList(values: number[]): Node | null {
  if (values.length === 0) return null;

  const head = new Node(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = new Node(values[i]);
    current = current.next;
  }

  return head;
}

function reverseList(head: Node | null): Node | null {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

// Build
const head = buildList([1, 2, 3, 4, 5]);

// Reverse
const reversedHead = reverseList(head);
