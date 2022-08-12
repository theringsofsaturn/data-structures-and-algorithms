const letters = ["d", "z", "f", "h", "r", "c", "e", "x"];
const numbers = [2, 65, 37, 2, 1, 7, 8];

console.log(letters.sort()); // This will sort the letters in alphabetical order correctly
console.log(numbers.sort()); //! This will not sort the numbers correctly

//* When it comes to sorting, if we didn't implement it, we need to know how it works. The way JavaScript in this case is sorting the numbers is by converting them to strings. Under the hood it is grabbing the character code of the number like this:
// "65".charCodeAt(0) // returns 54. 54 is Unicode.
