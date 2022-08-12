class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    // return this.data;
  }

  get(key) {
    let address = this._hash(key);
    let currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }
    return keys;
  }
  values() {
    let values = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          values.push(this.data[i][j][1]);
        }
      }
    }
    return values;
  }

  remove(key) {
    let address = this._hash(key);
    let currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          currentBucket.splice(i, 1);
        }
      }
    }
  }

  clear() {
    this.data = [];
  }

  size() {
    let count = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        count += this.data[i].length;
      }
    }
    return count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  contains(key) {
    return this.get(key) !== undefined;
  }

  toString() {
    let string = "";
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        string += `${i}: `;
        for (let j = 0; j < this.data[i].length; j++) {
          string += `[${this.data[i][j][0]}, ${this.data[i][j][1]}] `;
        }
        string += "\n";
      }
    }
    return string;
  }

  _resize(newSize) {
    let oldData = this.data;
    this.data = new Array(newSize);
    for (let i = 0; i < oldData.length; i++) {
      if (oldData[i]) {
        for (let j = 0; j < oldData[i].length; j++) {
          this.set(oldData[i][j][0], oldData[i][j][1]);
        }
      }
    }
  }

  _resizeIfNeededForRemove() {
    if (this.size() / this.data.length < 0.25) {
      this._resize(this.data.length / 2);
    }
  }

  _resizeIfNeededForAdd() {
    if (this.size() / this.data.length > 0.75) {
      this._resize(this.data.length * 2);
    }
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
myHashTable.keys();

// Hash Tables VS Arrays

// Arrays Big O Notation
// Search - O(n)
// Insert - O(n)
// Delete - O(n)
// Push - - O(1)
// Lookup - O(1)

// Hash Tables Big O Notation
// Search - O(1)
// Insert - O(1)
// Delete - O(1)
// Lookup - O(1)
