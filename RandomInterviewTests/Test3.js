// Write a function "findLargest(collection, n) that finds the n-th largest value in the collection. The n parameter starts at 1.
// Example:
// let collection =  [40, 542, 739, 183, 804, 919, 656, 772, 754, 544, 520, 956, 916, 889, 409, 843, 593, 575, 587, 493, 886, 913, 413, 138, 384];
// findLargest(collection, 3); // returns 916
// findLargest(collection, 19) // returns 413

function findLargest(collection, n) {
  let sorted = collection.sort((a, b) => a - b);
  return sorted[sorted.length - n];
}

// another solution:
function findLargest(collection, n) {
  return collection.sort((a, b) => b - a)[n - 1];
}
