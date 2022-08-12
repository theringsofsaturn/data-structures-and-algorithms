// Check for palindrome

// Solution 1:
function isPalindrome(text) {
  return text === text.split("").reverse().join("");
}
// test the function
console.log(isPalindrome("racecar"));

// Solution 2 with every() method.
// Every method checks if all the elements in an array satisfy a condition. It will be a boolean check. For example you want to check this array: [2, 7, 11, 4] if every value is greater than 5.
// array.every((value)=> value > 5)
// We call the every() method on the array and we pass in a function to invoke for every element on that array.
// In this case, we will check for every element in the array if it is greater than 5. If ANY of the elements is less than 5, then the every() method will return false. If ALL the elements are greater than 5, then the every() method will return true.

// For our purpose, lets say we have the array: [a, b, c, b, a]
// We will compare the very first element in the array with the last element (is a equal to a?). If it returns true, we are good on thinking so far this is a palindrome, and so we continue the comparison of the other elements... we'll compare the second element in the array with the second last element in the array (is b equal to b?). Are they true? We repeat the process through out the array. In this case with c, we will compare c to itself because it's at the center. Something to immediately point out is, if we come at the third comparison of c, we don't need to continue and check the last two elements (the last b, a after the c) because we already checked the first comparison if the first a is equal to the last a, and if the second b is equal to the second to last b. When we arrive at the center (c), we need to stop the iteration process, and don't do  more comparison that are neccessary. That's why this would not be the optimal solution for this, because it will do twice the work.

function isPalindrome2(str) {
  // First of all turn the string into an array. every() works only on arrays. We do this with split() method. Then with the help of a second parameter "i" (char, i) which is for index, we can compare the first element with the last element: char === str[str.length - i - i] (- 1 to make sure we increment for every step we loop, and -1 because we're taking into account that .length is the length of the array but we are 0 indexed with arrays).

  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

console.log(isPalindrome2("racecar"));
