// To stop a possible stack overflow, we need a base case. The base case is the condition that will stop the recursion.

let counter = 0;

function inception() {
  console.log(counter);
  if (counter > 3) {
    return "I'm out of here!";
  }
  counter++;
  inception(); // we need return inception() to return the message
}

console.log(inception());
// prints:
// 0
// 1
// 2
// 3
//! undefined

//? It doesn't print "I'm out of here!". It prints undefined. Why? Because inception() returns once the message when the counter is 4, then we popped off the stack, and we are at the other inception() calls that are not returning anything. We need to keep telling it to return the message and bublle it out toward the top of the stack.
//* The function calls in the stack is if we do something like this:
// inception(inception(inception(inception("I'm out of here!"))))

//! We have 3 rules with recursion:
//* Identify the base case
//* Identify the recursive case
//* Return when needed. Usually you have two returns. One for the base case and one for the recursive case.
