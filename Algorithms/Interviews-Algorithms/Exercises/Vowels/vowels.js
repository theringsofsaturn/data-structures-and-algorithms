// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 1. Iterative

function findVowels(string) {
  let result = [];
  const vowels = ["a", "e", "i", "o", "u"];

  for (const char of string) {
    if (vowels.includes(char)) {
      result.push(char);
    }
  }
  return result.length;
}

console.log(findVowels("Hello There!"));

// Solution 2. Regular expression

function findVowels2(string) {
  const matches = string.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(findVowels2("Hello There!"));
