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

  // I will add the rule to use the new ES6 feature of for...of loop in interviews, whenever possible, instead of the classic for loop. This is to avoid silly small mistakes in the syntax.

  for (let character of str) {
    // add the iteration to the beginning of the reversed string.
    reversed = character + reversed;
  }
  return reversed;
}

console.log(reverse("apple"));
console.log(reverse2("apple"));
