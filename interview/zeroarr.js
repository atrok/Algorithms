/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var zero_head=0;
    var ind=0;
    for (var i=0; i<nums.length;i++){

        if (nums[ind]==0){
            nums.push(0);
            nums.splice(ind,1);
        }else{
            ind++;
        }


    }

    return nums
};

module.exports={moveZeroes:moveZeroes};