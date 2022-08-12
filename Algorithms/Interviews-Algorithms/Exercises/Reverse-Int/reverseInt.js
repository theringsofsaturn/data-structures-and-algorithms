// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers. The result should produce a number, not a string. The zero should be omitted, while the negative sign should be included.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// We can use toString() to turn the number into a string.
// split() method to turn that string into an array.
// reverse() method to reverse it.
// .join() to join it back together.
// in the end we want that "turned to string" turned back ti number. for this: parseInt() method.
// To include the negative sign we can simply multiply the result number with -1, with an if statement, or for a cleaner code we can use Math.sign() method which will accept the int argument. We multiply the result number with Math.sign. It will end up with a positive number if int argument is positive, or end up with a negative number if int argument is negative.

function reverseInt(int) {
  const reversedString = int.toString().split("").reverse().join("");

  //   if (int < 0) {
  //     return parseInt(reversedString) * -1;
  //   }

  // cleaner code with Math.sign
  return parseInt(reversedString) * Math.sign(int);
}

console.log(reverseInt(-189));
console.log(typeof reverseInt(189));
