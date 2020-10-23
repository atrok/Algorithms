const { assert } = require("./test");
const { fibPrime } = require("../Algorithms/fib_prime");

var test = {
  fn: fibPrime,
  test: [
    {
      condition: 8,
      result: [2, 3, 5, 13],
    },
  ],
};

assert(test);
