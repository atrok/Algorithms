// Given a string s of '(' , ')' and lowercase English characters. Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Input: s = "))(("
// Output: ""

// Input: s = "a)b(c)d"
// Output: "ab(c)d"

// Input: s = "(a(b(c)d)"
// Output: "a(b(c)d)" or "(a(bc)d)"
// input: a()()d

function main(str) {
  let openbrkcnt = 0,
    closebrkcnt = 0,
    openptr = 0,
    closeptr = 0;

  let strmap = new Map();
  let strarr = str.split();
  let stack = []; //stack

  for (let i = 0; i < strarr.length; i++) {
    if (strarr[i] === "(") stack.push(i);

    if (strarr[i] === ")") {
      if (stack.length == 0) strmap.set(i, i);
      else stack.pop();
    }
  }

  let finalstr = "";

  for (let j = 0; j < strarr.length; j++) {
    let u = strmap.get(j);
    if (!u) finalstr = finalstr + strarr[j];
  }

  return finalstr;
}

module.exports = { parenthesis: main };
