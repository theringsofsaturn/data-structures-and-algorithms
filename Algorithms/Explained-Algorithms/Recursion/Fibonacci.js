// Given a number N, return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, …
// The pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

// Recursive solution

let fibonacciArray = [];
// or we can initialize the array with [0, 1], then the condition if(n < 2) => return n.

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

//* Anything that can be done recursively, can be done iteratively (loop).

//* Although recursion can be more DRY and readable, it can take too much memory and time to execute. But there is something called "Tail Call Optimization". In JavaScript ES6, for example, it allows recursion to be called without increasing the call stack. This issue can actually be solved during production. Read more about it here:

//* http://2ality.com/2015/06/tail-call-optimization.html

//* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Tail_call_optimization

//? When to use recursion? When it gets to complicated problems like traversing, or searching through trees or graphs, recursive is really useful and better than iterative. And with sorting through items, there is also cases when recursion is prefered.

//! Rule:
//* Every time you are using a tree, or converting something into a tree, consider recursion.

//* There's 3 key things that might trigger a recursive solution:
//! 1. A problem can be subdivided into a number of subproblems that are smaller instances of the same problem.

//! 2. Each instance of the subproblem is identical in nature. That is, the calculations that we need to do, are pretty much the same.

//! The solutions of each subproblems can be combined to solve the problem at hand. That is a recursive solution that we can use.

//! Divide and conquer using recursion.

//! One thing can recursion can do that loops can't, is that they can make some tasks super easy, in terms of readability and coding. 
