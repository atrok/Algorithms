const { assert } = require("./test");
var jump = require("./jump");

var jumptest = {
  fn: jump.jump,
  test: [
    {
      condition: [3, 2, 1],
      result: 1,
    },
  ],
};

assert(jumptest);
