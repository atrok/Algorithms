const { assert } = require("./test");
var moveZeroes = require("./Algorithms/zeroarr");

var test = {
  fn: moveZeroes.moveZeroes,
  test: [{ condition: [0, 1, 0, 3, 12], result: [1, 3, 12, 0, 0] }],
};

assert(test);
