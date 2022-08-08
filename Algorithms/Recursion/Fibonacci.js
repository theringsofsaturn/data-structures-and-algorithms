// Given a number N, return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, …
// The pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

// Iterative solution
let fibonacciArray = []; // or we can initialize the array with [0, 1], then the condition if(n < 2) => return n.
let fibonacci = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

for (let i = 0; i <= 15 + 1; i++) {
  fibonacciArray.push(fibonacci(i));
}

console.log("Fibonacci sequence", fibonacciArray);
console.log("Iterative solution: ", fibonacci(7));

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

console.log("Recursive solution: ", findIndexValueOfFibonacciRecursive(6));
