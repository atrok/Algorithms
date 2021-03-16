var solution = function (arr) {
  function QuickSort(arr, start, end) {
    if (start < end) {
      let pIndex = partition(arr, start, end);

      QuickSort(arr, start, pIndex - 1);
      QuickSort(arr, pIndex + 1, end);
    }
  }

  function partition(arr, start, end) {
    let pivot = arr[end];
    let index = start;

    for (let i = start; i < end; i++) {
      if (arr[i] <= pivot) {
        let t = arr[i];
        arr[i] = arr[index];
        arr[index] = t;
        index++;
      }
    }
    // swap pivot with element at index position as it's greater than pivot
    let t = arr[index];
    arr[index] = pivot;
    arr[end] = t;

    return index;
  }

  QuickSort(arr, 0, arr.length - 1);

  return arr;
};
module.exports = { quicksort: solution };
