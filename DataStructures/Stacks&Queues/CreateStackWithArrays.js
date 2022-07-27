// Create a stack with arrays

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const myStack = new Stack();

console.log(myStack.push("Google"));
console.log(myStack.push("Facebook"));
console.log(myStack.push("Amazon"));
console.log(myStack.push("Microsoft"));
console.log(myStack.isEmpty());
console.log(myStack.print());
