// Given 2 arrays, create a function that let's the user know (true/false) whether these two arrays contain any common items.

// Example:

// Should return false
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];

// Should return true
const array3 = ["a", "b", "c", "x"];
const array4 = ["z", "y", "x"];

function commonItems(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }
  return false;
}

commonItems(array1, array2);

// This is not the best approach, but it works. It has the time complexity of O(n^2), actually, O(a*b) where a and b are the lengths of the two arrays.
// The space complexity is O(n). We are not using any new variables. We are just using the input arrays.

// A better approach is to use a hash table.
// array1 = ==> obj {
//   a: true,
//   b: true,
//   c: true,
//   x: true
// }

// array2[index] ===> obj.properties

function commonItems2(array1, array2) {
  let obj = {};
  for (let i = 0; i < array1.length; i++) {
    obj[array1[i]] = true;
  }
  for (let i = 0; i < array2.length; i++) {
    if (obj[array2[i]]) {
      return true;
    }
  }
  return false;
}

commonItems2(array1, array2);

// This solution has time complexity of O(a + b), where a and b are the lengths of the two arrays.
// The space complexity is O(a). We are creating a new object with the properties of the first array, which takes O(a) space (which is the first array ).
// In terms of time complexity, this commonItems2() is a better solution than commonItems(). But in terms of space complexity, commonItems() is a better solution.

// A cleaner solution useing ES6's array methods.
function commonItems3(array1, array2) {
  return array1.filter((item) => array2.includes(item)).length > 0;
}

// Or with ".some()" array method
function commonItems4(array1, array2) {
  return array1.some((item) => array2.includes(item));
}

// Some other important things to mention, are:
// - Use more descriptive variable names.Like instead of "i" & "j" use more descriptive name. Instead of "arr1" & "arr2" you might need to use "userArray1" & "userArray2". A better object name like the name of the user etc.

//Also, very important is to modularize your code. Use functions to separate your code, in small pieces, so everyone can understand better the code. For modular we mean small pieces of code that are easy to understand and easy to modify, that do one thing and do that very well.
