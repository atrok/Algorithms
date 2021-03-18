/*

Given an array of integers, rotate the array by NN elements where NN is an integer:

For positive values of NN, perform a right rotation.
For negative values of NN, perform a left rotation.
Make sure you make changes to the original array.


*/

let rotateArray = function (arr, n) {
  //TODO: Write - Your - Code
  let len = arr.length;
  n = n % len;

  console.log(`n:${n}`);
  if (n < 0) {
    n = n + len;
  }

  reverseArray(arr, 0, len - 1);
  reverseArray(arr, n, len - 1);
  reverseArray(arr, 0, n - 1);

  return arr;
};

let reverseArray = function (arr, start, end) {
  let temp;

  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

module.exports = { rotateArray: rotateArray };
