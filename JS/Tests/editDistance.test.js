const { assert } = require("./test");
var fn_edit_dist = require("./edit_dist");

var test = {
  fn: fn_edit_dist,
  test: [
    {
      condition: [
        "How old is the Brooklyn bridge?",
        "how old is the brooklyn bridge",
        true,
      ],
      result: true,
    },
  ],
};

assert(test);
