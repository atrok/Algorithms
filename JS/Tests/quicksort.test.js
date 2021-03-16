const { assert } = require("./test");

var quicksort = require("../Algorithms/quicksort");

var solution = {
  fn: quicksort.quicksort,
  test: [
    {
      condition: [7, 3, 2, 8, 1, 5, 6, 4],
      result: [1, 2, 3, 4, 5, 6, 7, 8],
    },
  ],
};

assert(solution);
