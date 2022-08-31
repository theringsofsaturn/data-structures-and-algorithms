// What is a Linked List?

// A Linked List is a data structure that consists of nodes that contain data and pointers to the next node in the list. (pointer to another node or null if there is no next node)
// It contains a *head*, a *tail* and a length property.
// Each node is only connected unidirectionally to the next node. (The Double Linked List has a connection poiting back to the previous node).

// Linked Lists vs Arrays
// Lists:
// do not have indexes.
// connected via nodes with a *next* pointer.
// Random access is not allowed (we can't ask for an item at a specific index and get it immediately. We have to traverse from the beginning to the index of that item).
// They are very good at insertion and deletion! (The main reason we would want to work with a Linked List is for insertion or deletion)

// Arrays:
// Indexed and in order.
// Insertion and deletion can be expensive.
// Can quickly be accessed at a specific index.

// Take a look at this interactive example of single linked list with animations: https://visualgo.net/en/list?slide=2-5

// Create a Linked List in JavaScript
// Linked List: 10 --> 5 --> 15

// Example Js object:
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 15,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Class LinkedList
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    // We can use the above or instantiate a new node from the class Node like:
    // const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    // const newNode = new Node(value);
    const newNode = {
      value: value,
      next: this.head,
    };
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
    };
    let leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
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

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  }

  reverse() {
    if (!this.head.next) {
      return this;
    }
    let first = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
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

const myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(15));
console.log(myLinkedList.prepend(20));
console.log(myLinkedList.insert(2, 30));
console.log(myLinkedList.remove(2));
// console.log(myLinkedList.reverse());
console.log(myLinkedList.printList());
