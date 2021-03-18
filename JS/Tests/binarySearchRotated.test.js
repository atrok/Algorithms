const { assert } = require("./test");

var solution = require("../Algorithms/binarySearchRotated");

var solution = {
  fn: solution.binarySearchRotated,
  test: [
    {
      condition: [[5, 6, 7, 8, 1, 2, 3, 4], 8],
      result: 3,
    },
    {
      condition: [[5, 6, 7, 8, 1, 2, 3, 4], 4],
      result: 7,
    },
    {
      condition: [[5, 6, 7, 8, 1, 2, 3, 4], 5],
      result: 0,
    },
    {
      condition: [[5, 6, 7, 8, 1, 2, 3, 4], 10],
      result: -1,
    },
    {
      condition: [[5, 6, 7, 8, 1, 2, 3, 4], 1],
      result: 4,
    },
  ],
};

assert(solution);
