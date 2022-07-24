// Merge two arrays of numbers into one sorted array

function mergeSorted(array1, array2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
        result.push(array1[i]);
        i++;
        } else {
        result.push(array2[j]);
        j++;
        }
    }
    while (i < array1.length) {
        result.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        result.push(array2[j]);
        j++;
    }
    return result;
    }

    console.log(mergeSorted([1, 3, 5, 7], [2, 4, 6, 8]));

  