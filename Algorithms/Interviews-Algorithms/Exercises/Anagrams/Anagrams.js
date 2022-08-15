// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1:

function anagrams(stringA, stringB) {
  // 1. Convert the strings to lowercase.
  stringA = stringA.toLowerCase();
  stringB = stringB.toLowerCase();
  stringA.replace(/[^\w]/g, "");
  stringB.replace(/[^\w]/g, "");

  // 2. Create an empty object to store the characters of the first string.
  let objA = {};
  // 3. Create an empty object to store the characters of the second string.
  let objB = {};
  // 4. Loop through the first string and add the characters to the object.
  for (let i = 0; i < stringA.length; i++) {
    // 4.1 If the character is not in the object, add it to the object.
    if (!objA[stringA[i]]) {
      objA[stringA[i]] = 1;
    } else {
      // 4.2 If the character is in the object, add 1 to its value.
      objA[stringA[i]]++;
    }
  }
  // 5. Loop through the second string and add the characters to the object.
  for (let i = 0; i < stringB.length; i++) {
    // 5.1 If the character is not in the object, add it to the object.
    if (!objB[stringB[i]]) {
      objB[stringB[i]] = 1;
    } else {
      // 5.2 If the character is in the object, add 1 to its value.
      objB[stringB[i]]++;
    }
  }
  // 6. Loop through the object and check if the values are equal.
  for (let key in objA) {
    // 6.1 If the values are not equal, return false.
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  // 6.2 If the values are equal, return true.
  return true;
}

console.log(anagrams("rail safety", "fairy tales"));
console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
console.log(anagrams("Hi there", "Bye there"));

// Solution 2:

function anagrams2(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(string) {
  return string.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

console.log(anagrams2("rail safety", "fairy tales"));
console.log(anagrams2("RAIL! SAFETY!", "fairy tales"));
console.log(anagrams2("Hi there", "Bye there"));
