//* Bubble sorting is usually the most simple but not the most efficient way to sort. Its average and worst case performance is O(n^2). With a space complexity of O(1).

// Bubble sort example algorithm

const numbers = [2, 65, 37, 2, 1, 23, 208, 8, 134];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        // Swap numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort(numbers)); // [1, 2, 2, 8, 23, 37, 65, 134, 208]
