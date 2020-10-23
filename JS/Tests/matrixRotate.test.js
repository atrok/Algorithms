const { assert } = require("./test");
const matrixRotate = require("../Algorithms/matrixRotate");

var test = {
  fn: matrixRotate.solution,
  test: [
    {
      condition: [],
      result: [],
    },
    {
      condition: [1],
      result: [1],
    },
    {
      condition: [[1]],
      result: [[1]],
    },
    {
      condition: [
        [1, 2],
        [3, 4],
      ],
      result: [
        [3, 1],
        [4, 2],
      ],
    },
    {
      condition: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      result: [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ],
    },
  ],
};

assert(test);
