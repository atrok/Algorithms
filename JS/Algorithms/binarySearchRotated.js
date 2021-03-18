/*
Search for a given number in a sorted array, with unique elements, that has been rotated by some arbitrary number. Return -1 if the number does not exist.

rotated array:
176,188,199,200,210,222,1,10,20,47,59,63,75,88,99,107,120,133,155,162

*/

let binarySearchRotated = function (args) {
  let [arr, key] = args;
  let res = -1;

  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    console.log(
      ` start:${start}, end: ${end}, mid; ${mid}, arr[mid]: ${arr[mid]}`
    );
    if (arr[mid] == key) return mid;
    if (arr[start] == key) return start;
    if (arr[end] == key) return end;

    if (arr[mid] > key && key > arr[start]) {
      end = mid - 1;
    }

    if (arr[mid] > key && key < arr[start]) {
      start = mid + 1;
    }

    if (arr[mid] < key && key > arr[start]) {
      start = mid + 1;
    }

    if (arr[mid] < key && key < arr[start]) {
      end = mid - 1;
    }
  }

  return res;
};

module.exports = { binarySearchRotated: binarySearchRotated };
