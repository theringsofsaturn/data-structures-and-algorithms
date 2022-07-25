// Create a double Linked List
// It is pretty much the same as the single linked list, but it has a previous pointer property.

class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: this.tail,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
      prev: null,
    };
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    let leader = this.traverseToIndex(index - 1);
    let follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this;
  }
  remove(index) {
    if (index >= this.length) {
      return null;
    }
    let leader = this.traverseToIndex(index - 1);
    let removed = leader.next;
    leader.next = removed.next;
    removed.next.prev = leader;
    this.length--;
    return removed;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const MydoubleLinkedList = new DoubleLinkedList(10);

console.log(MydoubleLinkedList.append(20));
console.log(MydoubleLinkedList.prepend(30));
console.log(MydoubleLinkedList.insert(2, 40));
console.log(MydoubleLinkedList.remove(2));
console.log(MydoubleLinkedList.printList());
