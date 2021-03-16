const solution = (array) => {
  function merge(left, right) {
    console.log("merge:" + left.toString() + ":" + right.toString() + "|");
    let merged = [];
    let i = 0;
    let j = 0;

    while (i < left.length || j < right.length) {
      console.log(
        "left.length:" + left.length + " right.length:" + right.length
      );
      console.log(`left[${i}] :${left[i]} vs right[${j}]:${right[j]}`);

      // test left and right values, and insert in front of merged array the value that less
      if (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
          // left is less, insert it in front
          merged.push(left[i]);
          i++;
        } else {
          // right is less, insert it in front
          merged.push(right[j]);
          j++;
        }
      }
      // check for condition when we reached the end of one of the array, assume it's left
      // is it's the end let's add the remaining values from right side
      if (i == left.length && j < right.length) {
        //
        merged.push(right[j]);
        j++;
      }

      if (j == right.length && i < left.length) {
        //
        merged.push(left[i]);
        i++;
      }
    }

    console.log("merged:" + merged.toString() + "|");
    return merged;
  }

  function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }

    let middleIndex = Math.floor(array.length / 2);

    let left = array.slice(0, middleIndex);
    let right = array.slice(middleIndex, array.length);
    console.log("sliced: " + left.toString() + " vs " + right.toString() + "|");
    let res = merge(mergeSort(left), mergeSort(right));
    console.log("res: " + res);

    return res;
  }

  return mergeSort(array);
};

module.exports = { mergeSort: solution };
