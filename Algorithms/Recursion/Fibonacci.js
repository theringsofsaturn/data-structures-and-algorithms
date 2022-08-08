// Given a number N, return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, …
// The pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

// First solution - recursive & loop
let fibonacciArray = []; // or we can initialize the array with [0, 1], then the condition if(n < 2) => return n.
// Recursive solution
function findIndexValueOfFibonacciRecursive(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return (
      findIndexValueOfFibonacciRecursive(n - 1) +
      findIndexValueOfFibonacciRecursive(n - 2)
    );
  }
}

// Fill the array with 15 Fibonacci numbers
for (let i = 0; i <= 15 + 1; i++) {
  fibonacciArray.push(findIndexValueOfFibonacciRecursive(i));
}

console.log("Fibonacci sequence: ", fibonacciArray);
console.log("Recursive solution: ", findIndexValueOfFibonacciRecursive(6));

// Iterative solution
function findIndexValueOfFibonacciIterative(n) {
  let fibonacciArray = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
  }
  return fibonacciArray[n];
}

console.log("Iterative solution: ", findIndexValueOfFibonacciIterative(6));

//* Big O complexity for interative solution is O(n) - linear
//* Big O complexity for recursive solution is O(2^n) - exponential
//! exponential is very bad, even worse than two nested loops O(n^2)
