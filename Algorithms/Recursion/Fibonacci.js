// Given a number N, return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, …
// The pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

let fibonacciArray = [];
let fibonacci = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

for (let i = 0; i <= 15; i++) {
  fibonacciArray.push(fibonacci(i));
}
console.log(fibonacciArray);
console.log(fibonacci(7));

function findIndexValueOfFibonacciSequence(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return (
      findIndexValueOfFibonacciSequence(n - 1) +
      findIndexValueOfFibonacciSequence(n - 2)
    );
  }
}

console.log(findIndexValueOfFibonacciSequence(6));
