// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Simple solution with reverse() method
function reverse(str) {
  return str.split("").reverse().join("");
}

// Solution with for loop.
// 1. Create an empty string to store the reversed string.
// 2. For each character in the provided string,
// 2.1 Take the character and add it to the beginning of the reversed string.
// 3. Return the reversed string variable.

function reverse2(str) {
  let reversed = "";

  // I will add the rule to use the new ES6 feature of for...of loop instead of the classic for loop. This is to avoid silly small mistakes in the syntax.

  for (let character of str) {
    // add the iteration to the beginning of the reversed string.
    reversed = character + reversed;
  }
  return reversed;
}

// Solution with reduce() method.

// reduce method takes two arguments:
// 1. an arrow function that takes two arguments:
//   1. the accumulator (the value of the previous iteration)
//   2. the current value of the array
// 2. the starting value for our function (we're passing an empty string)

// So, whenever reduce runs, it will take the starting argument (the empty string), and will pass it into the arrow function as the first argument (reversed variable), and whatever is returned from the arrow function will be then used as the starting argument for every subsequent iteration. In total, reduce run one time for every item in the array or string in this case.

function reverse3(str) {
  debugger;
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

console.log(reverse("apple"));
console.log(reverse2("apple"));
console.log(reverse3("apple"));
