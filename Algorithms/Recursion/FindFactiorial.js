// Write two functions that finds the factorial of any number. One should use recursion and the other should use a loop.

function findFactorialIterative(num) {
  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial *= i;
    // console.log(factorial);
  }
  return factorial;
}

console.log(findFactorialIterative(5)); // 120

function findFactorialRecursive(num) {
  if (num === 1) {
    return 1;
  }
  let factorial = num * findFactorialRecursive(num - 1);
  // console.log(factorial);
  return factorial;
}

console.log(findFactorialRecursive(5)); // 120
