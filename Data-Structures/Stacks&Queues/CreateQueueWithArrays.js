// Create a queue with arrays

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  add(item) {
    this.item.unshift(item);
  }

  remove() { 
    return this.item.pop();
  }

  peek() {
    return this.items[0];
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

const myQueue = new Queue();

console.log(myQueue.isEmpty());
myQueue.enqueue("Google");
myQueue.enqueue("Udemy");
myQueue.enqueue("Youtube");
myQueue.print();
