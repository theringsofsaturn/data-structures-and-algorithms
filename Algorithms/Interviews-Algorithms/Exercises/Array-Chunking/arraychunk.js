// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = [];

  for (const i of array) {
    // retrieve the last elements of chunked
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      // If last element doesn't exist, or if its length is equal to chunk size
      chunked.push([i]); // create a new chunk to "chunked" with the current element to that
    } else {
      last.push(i); // add the current element into the chunk
    }
  }
  return chunked;
}

console.log(chunk([1, 2, 3, 4], 2));
