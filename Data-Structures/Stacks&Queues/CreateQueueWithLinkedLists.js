// Create a queue with linked lists

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(item) {
    const node = new Node(item);
    if (this.isEmpty()) {
      this.first = node;
    } else {
      this.last.next = node;
    }
    this.last = node;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const node = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return node.value;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.first.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  clear() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  size() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      return null;
    }
    let current = this.first;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const myQueue = new Queue();

console.log(myQueue.isEmpty());
myQueue.enqueue("Google");
myQueue.enqueue("Udemy");
myQueue.enqueue("Youtube");
myQueue.print();
