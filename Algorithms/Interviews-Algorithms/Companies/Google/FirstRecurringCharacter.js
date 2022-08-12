//? Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

let arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
let arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
let arr3 = [2, 3, 4, 5];

// Nested loop solution (not the best for Big O complexities. I will improve it below with Hash Tables data structures, with a Map algorithm)
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}
// Time complexity: O(n^2)
// Space complexity: O(1)

console.log(firstRecurringCharacter(arr1));
console.log(firstRecurringCharacter(arr2)); //! This returns 2, not 1
console.log(firstRecurringCharacter(arr3));

// Hash Solution
function firstRecurringCharacter2(input) {
  let hash = {};
  for (let i = 0; i < input.length; i++) {
    if (hash[input[i]]) {
      return input[i];
    }
    hash[input[i]] = true;
  }
  return undefined;
}

// Time complexity: O(n)
// Space complexity: O(n)

console.log(firstRecurringCharacter2(arr1));
console.log(firstRecurringCharacter2(arr2));
console.log(firstRecurringCharacter2(arr3));

// Map Solution
function firstRecurringCharacter3(input) {
  let map = new Map();
  for (let i = 0; i < input.length; i++) {
    if (map.has(input[i])) {
      return input[i];
    }
    map.set(input[i], true);
  }
  return undefined;
}

// Time complexity: O(n)
// Space complexity: O(n)

console.log(firstRecurringCharacter3(arr1));
console.log(firstRecurringCharacter3(arr2));
console.log(firstRecurringCharacter3(arr3));
