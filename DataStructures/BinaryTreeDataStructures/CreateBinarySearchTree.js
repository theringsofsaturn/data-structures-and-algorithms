// Create a Binary Search Tree

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }

  depthFirstTraversal(iteratorFunc, order) {
    if (order === "pre-order") {
      iteratorFunc(this.value);
    }

    if (this.left) {
      this.left.depthFirstTraversal(iteratorFunc, order);
    }

    if (order === "in-order") {
      iteratorFunc(this.value);
    }

    if (this.right) {
      this.right.depthFirstTraversal(iteratorFunc, order);
    }

    if (order === "post-order") {
      iteratorFunc(this.value);
    }
  }

  breadthFirstTraversal(iteratorFunc) {
    const queue = new Queue();
    queue.enqueue(this);
    while (!queue.isEmpty()) {
      const treeNode = queue.dequeue();
      iteratorFunc(treeNode.value);
      if (treeNode.left) {
        queue.enqueue(treeNode.left);
      }
      if (treeNode.right) {
        queue.enqueue(treeNode.right);
      }
    }
  }
}
