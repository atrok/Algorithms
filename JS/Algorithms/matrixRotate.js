// rotate square matrix on 90 degrees
const solution = (matrix) => {
  // Type your solution here

  if (matrix.length <= 1) return matrix;
  var newm = [];
  for (var i = 0; i < matrix.length; i++) {
    let r = [];
    for (var j = matrix.length - 1; j >= 0; j--) {
      console.log(matrix[j][i]);
      r.push(matrix[j][i]);
    }
    console.log(r);
    newm.push(r);
  }

  return newm;
};

module.exports = { solution };
