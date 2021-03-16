// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
//
// Input:  [5,2,0,4]
// Output: [0,0,40,0]
//
// Input:  [5,2,0,0]
// Output: [0,0,0,0]
//
function main(arr) {
  let product = 1; //=24
  let isZero = false;
  let zerocounter = 0; //

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) product = product * arr[i];
    else isZero = true;
  }

  let arr2 = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      if (!isZero) arr2[j] = product / arr[j];
      else arr2[j] = 0;
    } else arr2[j] = product;
  }

  return arr2;
}

module.exports = { numproduct: main };
