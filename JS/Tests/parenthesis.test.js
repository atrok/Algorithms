const { assert } = require("./test");
const p = require("../Algorithms/parenthesis");

var test = {
  fn: p.isValid,
  test: [{ condition: "()", result: true }],
};

assert(test);
