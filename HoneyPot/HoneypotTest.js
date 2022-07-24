//FizzBuzz test hackerrank

// Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows:

// If i is a multiple of both 3 and 5, print FizzBuzz.
// If i is a multiple of 3 (but not 5), print Fizz.
// If i is a multiple of 5 (but not 3), print Buzz.
// If i is not a multiple of 3 or 5, print the value of i.

// Function Description

// Complete the function fizzBuzz in the editor below.

 

// fizzBuzz has the following parameter(s):

//     int n:  upper limit of values to test (inclusive)

// Returns:    NONE

// Prints:

//     The function must print the appropriate response for each value i in the set {1, 2, ... n} in ascending order, each on a separate line.

// Constraints

// 0 < n < 2 × 105

// Explanation

// The numbers 3, 6, 9, and 12 are multiples of 3 (but not 5), so print Fizz on those lines.

// The numbers 5 and 10 are multiples of 5 (but not 3), so print Buzz on those lines.

// The number 15 is a multiple of both 3 and 5, so print FizzBuzz on that line.

// None of the other values is a multiple of either 3 or 5, so print the value of i on those lines.

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}