// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// One solution:

function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalize("a short sentence"));

// Another way:

function capitalize2(str) {
  let words = [];

  // split the string by spaces.
  for (const word of str.split(" ")) {
    // capitalize the first letter of each word, and then join it with the rest of the word using splice method (everything from index 1), and then push the result to the words array.
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  // in the end, take the words array and join them back together with a space
  return words.join(" ");
}

console.log(capitalize2("a short sentence"));
