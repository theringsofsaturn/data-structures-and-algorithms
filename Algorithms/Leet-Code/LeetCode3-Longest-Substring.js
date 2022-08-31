// Leetcode problem 3: Longest Substring Without Repeating Characters
// Problem Description: https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
//  * @param {string} s
//  * @return {number}
 */

const lengthOfLongestSubstring = (s) => {
    let max = 0;
    let start = 0;
    let end = 0;
    let map = new Map();
    while (end < s.length) {
        if (map.has(s[end])) {
        start = Math.max(start, map.get(s[end]) + 1);
        }
        map.set(s[end], end);
        max = Math.max(max, end - start + 1);
        end++;
    }
    return max;
    };

    
