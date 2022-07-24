// leetcode problem 1. Two Sum
// https://leetcode.com/problems/two-sum/

// faster than 90% of javascript submissions

function twoSum(nums, target) {
  let hash = {}; 
  for (let i = 0; i < nums.length; i++) { 
    let diff = target - nums[i];
    if (hash[diff] !== undefined) {
      return [hash[diff], i];
    }
    hash[nums[i]] = i;
  }
}