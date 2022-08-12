// Linear search is when we sequentially search through a list to find a specific value. Int he best scenario we will find the value in the first position - O(1) time complexity. In the worst scenario we will find the value in the last position, or search for something that doesn't exist - O(n) time complexity.

// Linear search examples

let languages = ["JavaScript", "Python", "Ruby", "Java", "C#", "C++"];

languages.indexOf(JavaScript); // 0

languages.findIndex((item) => item === "JavaScript"); // 0

languages.find((item) => item === "JavaScript"); // JavaScript

languages.includes("JavaScript"); // true

// For very large data sets (like Google search), we don't use linear search, because it will cost us a lot of time. 
