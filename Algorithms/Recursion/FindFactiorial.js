// Write two functions that finds the factorial of any number. One should use recursion and the other should use a loop.

function findFactorialIterative(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(findFactorialIterative(5)); // 120
