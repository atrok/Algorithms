const { assert } = require("./test");
const p = require("../Algorithms/rotatedArray.js");

var test = {
  fn: p.rotateArray,
  test: [
    {
      condition: [[1, 2, 3, 4, 5, 6], 2],
      result: [5, 6, 1, 2, 3, 4],
    },
    {
      condition: [[1, 2, 3, 4, 5, 6], -2],
      result: [3, 4, 5, 6, 1, 2],
    },
  ],
};

assert(test);
