const { assert } = require("./test");
var spiral2 = require("./spiral_matrix2");

var test = {
  fn: spiral2.generateMatrix,
  test: [
    {
      condition: 0,
      result: [],
    },
    {
      condition: 1,
      result: [[]],
    },
    {
      condition: 2,
      result: [[1, 2][(4, 3)]],
    },
    {
      condition: 3,
      result: [
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5],
      ],
    },
    {
      condition: 4,
      result: [
        [1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10, 9, 8, 7],
      ],
    },
  ],
};

assert(test);
