// LeetCode 5. Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

function findPalindrome(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.slice(left + 1, right);
}

function longestPalindrome(s) {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    let odd = findPalindrome(s, i, i);
    let even = findPalindrome(s, i, i + 1);
    let longestPalindrome = odd.length > even.length ? odd : even;
    if (longestPalindrome.length > longest.length) {
      longest = longestPalindrome;
    }
  }
  return longest;
}


