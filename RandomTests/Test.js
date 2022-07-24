// // check for palindrome
// function isPalindrome(str) {
//     // remove all non-alphanumeric characters
//     str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//     // check if the string is a palindrome
//     return str === str.split('').reverse().join('');
//     }
//     // test the function
//     console.log(isPalindrome('racecar'));

// shorter solution for checking if a string is a palindrome
function isPalindrome(text) {
  return text === text.split("").reverse().join("");
}
// test the function
console.log(isPalindrome("racecar"));

