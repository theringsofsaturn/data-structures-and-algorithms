// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// This algorithm is very common in interviews. It is also in the Google folder as the "first recurring character algorithm". Knowing this algorithm, we can solve various interview questions for strinmg related algorithms, like:

// What is the most common character in the string?
// Does string A have the same characters as string B (is it an anagram)?
// Does the given string have any repeated characters in it?

// Anything like this, anything like counting the numbers of characters, or comparing the numbers of characters, we can always use this technique.

// For all these different problems that are related to counting or verifying the numbers of characters in a string, we can take our string and convert it into an object, where the keys of the object are the characters from the string, and the values are the number of times that the character has been found. Example:

// We have the string:
"Hello There!";

// We will convert this string into an object:
// {
//     H: 1,
//     e: 3,
//     l: 2,
//     o: 1,
//     "": 1,
//     t: 1,
//     h: 1,
//     r: 1,
//     !: 1
// }

// Every character above has a value of how many times it has been found in the string.
// With this kind of map, we can solve many different kind of problems involving strings. For example, to solve the questions above:

// What is the most common character in the string?
// If we have the object, we can iterate through the object and find the property with the highest number assigned to it as a value. In this case it's 3.

// Does string A have the same characters as string B (is it an anagram)?
// We can build an object for both string A and string B, and compare the two. Then make sure that both objects has the same number of properties inside of it and the same values.

// Does the given string have any repeated characters in it?
// This might be the easist. Im this case, if there's any value on this object with a value greater than 1? Yes, there is. For example we have e: 3 or l:2, so yeah, 3 is repeated 3 times or l is repeated 2 times.

// Algorithm example:

const string = "Hello There!";

function charExample(string) {
  const chars = {};

  // For every character that we found and iterate over, we'll add a property to chars object.
  for (const char of string) {
    // reference to that particular location or its value. For the first time we have seen this character, we'll add the value of 1
    if (chars[char]) {
      // if nothing exists here right now...
      chars[char]++;
    } else {
      // otherwise assuming there's a property over there, take char and increment by 1
      chars[char] = 1;
    }
  }
  return chars;
}

console.log("Function 1: ", charExample(string));

// Another clean code example:

function charExample2(string) {
  const chars = {};
  // Without logical operator it will return null because there's no char property the first time we go through the object. So we add || 1:
  // If this is false, then assign 1 to char
  // chars[char] = chars[char] + 1 || + 1
  for (const char of string) {
    chars[char] = chars[char] + 1 || 1;
  }
  return chars;
}

console.log("Function 2", charExample2(string));

// The final algorithm solution to the initial problem:
// Given a string, return the character that is most
// commonly used in the string.

function maxChar(string) {
  const charObj = {};
  let max = 0;
  let maxChar = "";

  for (const char of string) {
    if (charObj[char]) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }
  }

  // To iterate through the object, we'll use for...in loop.
  for (const char in charObj) {
    if (charObj[char] > max) {
      max = charObj[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log("Final solution: ", maxChar("abcccccccd"));
