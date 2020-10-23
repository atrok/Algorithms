const { assert } = require("./test");

var bestfirstsearch = require("../Algorithms/bestfirstsearch");

var bfs = {
  fn: bestfirstsearch.isPathExists,
  test: [
    {
      condition: [
        [
          [0, 1, 0, 0, 0],
          [0, 0, 0, 1, 0],
          [0, 1, 0, 1, 0],
          [0, 0, 0, 1, 0],
          [0, 1, 1, 0, 0],
          [1, 1, 0, 0, 1],
        ],
        6,
      ],
      result: true,
    },
  ],
};

assert(bfs);
