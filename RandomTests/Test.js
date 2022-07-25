// Check for palindrome

function isPalindrome(text) {
  return text === text.split("").reverse().join("");
}
// test the function
console.log(isPalindrome("racecar"));
