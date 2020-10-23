const { assert } = require("./test");
var lengthOfLongestSubstring = require("./longest_substr");

var test = {
  fn: lengthOfLongestSubstring.lengthOfLongestSubstring,
  test: [
    { condition: "abcabcbb", result: 3 },
    { condition: "dvdf", result: 3 },
  ],
};

assert(test);
