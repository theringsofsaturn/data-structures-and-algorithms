// Fun with Anagrams test
// Two strings are anagrams if they are permutations of each other. In other words, both strings have the same size and the same letters. For example, "aaagmnrs" is an anagram of "anagrams". given an array of strings, remove each string that is an anagram of an earlier string, then return the remaining array in sorted order.

// Example:

// str = ["code", "doce", "ecode", "framer", "frame"]

// "code" and "doce" are anagram. Remove "doce" from the array and keep the first occurrence "code" in the array.

// - "code" and "ecod" are anagrams. Remove "ecod" from the array and keep the first occurrence "code" in the array.

// - "code" and "framer" are not anagrams. Keep both strings in the array.

// - "framer" and frame" are not anagrams due to extra "r" in "framer". Keep both strings in the array.

// Order the remaining strings in the array in ascending order: ["code", "frame", "framer"]

// Function description:
// Complete the function funWithAnagrams in the editor below. 
// funWithAnagrams has the following parameter(s):
// string text[n]: an array of strings
// Return:
// string[m]: an array of the remaining strings in ascending alphabetical order

// Constraints:
// 0 < n < 1000
// 0 < m < n
// 1 < length of text[i] < 1000
// Each string  text[i] is made up of characters in the range ascii[a-z].

// Input Format for custom testing:
// The first line contains an integer n, that denotes the number of elements in text.
// Each line i of the n subsequent lines (where 0 < i < n) contains a string text[i].

// Sample case 0:
// Sample Input for custom testing:
// STDIIN        Function
// 4        =>    n = 4
// code        =>    text = ["code", "aaagmnrs", "anagrams", "doce"]
// aaagmnrs
// anagrams
// doce

// Sample Output:
// aaagmnrs
// code

// Explanation 
// " code" and "doce" ara anagrams. Remove "doce" from the array and keep the first occurrence "code" in the array.
// "aaagmnrs" and "anagrams" are anagrams. Remove "anagrams" from the array and keep the first occurrence "aaagmnrs" in the array.
// Order the remaining strings in the array in ascending order: ["aaagmnrs", "code"]

// Sample case 1:
// STDIIN        Function
// 4        =>    n = 4
// poke     =>    text = ["poke", "pkoe", "okpe", "ekop"]
// pkoe
// okpe
// ekop

// Sample Output:
// poke

// Explanation
// "poke" and "pkoe" are anagrams. Remove "pkoe" from the array and keep the first occurrence "poke" in the array.
// "poke" and "okpe" are anagrams. Remove "okpe" from the array and keep the first occurrence "poke" in the array.
// "poke" and "ekop" are anagrams. Remove "ekop" from the array and keep the first occurrence "poke" in the array.
// Order the remaining strings in the array in ascending order: ["poke"]

function funWithAnagrams(text) {
    let result = [];
    let hash = {};
    for (let i = 0; i < text.length; i++) {
        let sorted = text[i].split('').sort().join('');
        if (!hash[sorted]) {
            hash[sorted] = text[i];
            result.push(text[i]);
        }
    }
    return result.sort();
}