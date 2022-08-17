// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

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
