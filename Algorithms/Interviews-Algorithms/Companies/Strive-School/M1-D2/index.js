/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE */

/* A box that contains something. A placeholder for an unknown value, or we can give the value we want. You can open the box to find out what is inside, or even put something else into the box */

/*
NUMBERS
5
5.5
45.24545654


STRINGS
"hello strivers"
'hello strivers'
`hello strivers`


BOOLEANS
true
false
3 > 2 --> true
4 > 10 --> false
3 === 3 --> true
10 === 5 --> false
5 === '5' --> false
'strive' === 'strive' --> true
=== --> checks if they are the same in VALUE and TYPE
5 == '5' --> true DO NOT USE THIS
'' --> false
'nando' --> true 


3 + 4 = 7
'3' + '4' = '34'


SPECIAL ONES
undefined -> the value is not there yet
null -> not existing, the total absence of value
*/

/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let result = 12 + 20;

/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

let x = 12;

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

let name = "John Doe";
// let name = 'John Doe'
// let name = `John Doe`

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/

let ex6result = 12 - x;

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";
console.log(name1 === name2);
console.log(name1.toLowerCase() === name2.toLowerCase());

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Create a variable named x (its value must be less than 10). 
Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

x = 6;
if (x === 1) {
  console.log("one");
} else if (x === 2) {
  console.log("two");
} else if (x === 3) {
  console.log("three");
} else if (x === 4) {
  console.log("four");
} else if (x === 5) {
  console.log("five");
} else if (x === 6) {
  console.log("six");
} else if (x === 7) {
  console.log("seven");
} else if (x === 8) {
  console.log("eight");
} else if (x === 9) {
  console.log("nine");
} else {
  console.log("not a valid number!");
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

let ternaryExample = x > 10 ? true : false;
// if (x > 10){
//     ternaryExample = true
// }
// else{
//     ternaryExample = false
// }

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
