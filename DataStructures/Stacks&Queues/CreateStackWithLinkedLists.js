// Stack Implementantion in JavaScript

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    // simply return top
    return this.top;
  }

  push(data) {
    // create a new node
    const newNode = new Node(data);
    // if stack is empty
    if (this.length === 0) {
      // set both top and bottom to new node
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // if stack is not empty
      newNode.next = this.top; // set newNode's next to top
      this.top = newNode; // set top to newNode
    }
    this.length++;
    return this;
  }

  pop() {
    // if stack is empty
    if (this.length === 0) {
      return null;
    }
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    }
    // if stack has one element
    // let poppedNode = this.top; // set poppedNode to top
    this.top = this.top.next; // set top to top's next
    this.length--; // decrement length
    // return poppedNode; // Not to let the poppedNode be garbage collected
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }

  length() {
    return this.length;
  }

  print() {
    let current = this.top;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  clear() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
}

let myStack = new Stack();
console.log(myStack.push("Google"));
console.log(myStack.push("Facebook"));
console.log(myStack.push("Twitter"));
console.log(myStack.push("Linkedin"));
console.log(myStack.push("Instagram"));
console.log(myStack.push("Snapchat"));
console.log(myStack.pop());

console.log(myStack.print());
console.log(myStack.isEmpty());
// console.log(myStack.length());
