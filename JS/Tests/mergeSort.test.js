const { assert } = require("./test");
const { mergeSort } = require("../Algorithms/mergeSort");

test = {
  fn: mergeSort,
  test: [
    {
      condition: [],
      result: [],
    },
    {
      condition: [2, 1],
      result: [1, 2],
    },
    {
      condition: [3, 5, 4, 1, 2],
      result: [1, 2, 3, 4, 5],
    },
    {
      condition: [3, 4, 1, 2],
      result: [1, 2, 3, 4],
    },
  ],
};

assert(test);
