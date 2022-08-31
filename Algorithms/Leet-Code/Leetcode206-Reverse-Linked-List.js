// Leetcode problem 206. Reverse Linked List
// Input [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Solution

let head = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null,
        },
      },
    },
  },
};

function reverseList(head) {
  let current = head;
  let prev = null;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

console.log(reverseList(head));
