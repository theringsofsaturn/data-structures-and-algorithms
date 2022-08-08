// Write a function "check(collection, value)" that takes following data structure and a number as input and returns a boolean that indicates whether the number is present in the collection.
// Example:
let collection = [
  [20, 40, 168, 174],
  [287, 378, 455],
  [524, 534, 580],
  [627, 710],
  [856, 893, 897, 915],
  [946],
];
// check(collection, 9534) // returns true
// ccheck(collection, 400) //false
// check(collection, 710) //true

// Please note that collection can be much larger than what is provided.

function check1(collection, value) {
  for (let i = 0; i < collection.length; i++) {
    for (let j = 0; j < collection[i].length; j++) {
      if (collection[i][j] === value) {
        return true;
      }
    }
  }
  return false;
}

// another solution:
function check2(collection, value) {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].includes(value)) {
      return true;
    }
  }
  return false;
}

// another solution:
function check3(collection, value) {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].indexOf(value) !== -1) {
      return true;
    }
  }
  return false;
}

// Hash table solution 
function check4(collection, value) {
  let hash = {};
  for (let i = 0; i < collection.length; i++) {
    for (let j = 0; j < collection[i].length; j++) {
      hash[collection[i][j]] = true;
    }
  }
  return hash[value];
}
