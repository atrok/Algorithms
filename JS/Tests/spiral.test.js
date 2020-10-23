const { assert } = require("./test");
var spiral = require("./spiral_matrix");

var test = {
  fn: spiral.spiralOrder,
  test: [
    {
      condition: [
        [1, 2],
        [5, 4],
        [9, 8],
      ],
      result: [1, 2, 4, 8, 9, 5],
    },
    {
      condition: [[1], [5], [9]],
      result: [1, 5, 9],
    },
    { condition: [], result: [] },
    {
      condition: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      result: [1, 2, 3, 6, 9, 8, 7, 4, 5],
    },

    {
      condition: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ],
      result: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
    },
    {
      condition: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ],
      result: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10],
    },

    {
      condition: [
        [2, 3, 4],
        [5, 6, 7],
        [8, 9, 10],
        [11, 12, 13],
      ],
      result: [2, 3, 4, 7, 10, 13, 12, 11, 8, 5, 6, 9],
    },
  ],
};

assert(test);
