// Create a function that reverses a string.

// for loop method
function reverseString1(str) {
  let reversed = [];
  for (var i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join("");
}

// Split + Reverse method
function reverseString2(str) {
  return str.split("").reverse().join("");
}

// Even better and cleaner with arrow function
const reverseString3 = (str) => str.split("").reverse().join("");

// And more cleaner
const reverseString4 = (str) => [...str].reverse().join("");

console.log(reverseString1("Hi my name is Emilian"));
console.log(reverseString2("Hi my name is Emilian"));
console.log(reverseString3("Hi my name is Emilian"));
console.log(reverseString4("Hi my name is Emilian"));

// let text = "How are you doing today?";
// const myArray = text.split(" ");
// console.log(myArray);
