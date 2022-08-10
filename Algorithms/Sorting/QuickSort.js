// As the name we can already tell that it does the job quick. What we do here, is we pick a random pivot in a list, and lets suppose this pivot will be 4 from the list of numbers. Once we pick this pivot item, we want all numbers that are less than 4 to be on the left side of the pivot, and all numbers that are greater than 4 to be on the right side of the pivot.

// Quick sort is a "divide and conquer" algorithm, like merge sort. also, quick sort and merge sort are the most commonly used sorting algorithms. Their Big O time complexity is O(n log(n)). The main difference is that merge sort space complexity is O(n), while quick sort has it O(log(n )), which is much better. But quick sort worse case of time complexity can be O(n^2), and this is the case when the pivot is the smallest or the largest item in the list, so they are not really splitting in the half. Quick sort is usually the fastest on average, but it has this worst case scanarios of O(n^2). If there is no guarantee that the pivot will be good, it's better to avoid quick sort. But on average, it is the best sorting algorithm.

// Quick sort algorithm example

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
