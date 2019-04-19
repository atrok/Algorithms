/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    if(nums.length==0)
        return [];
    
    var res=[];
    var first=0, second=0;
    
    for (var i=0; i<nums.length-1; i++){
        for (var j=i+1; j<nums.length; j++){
            let t=nums[i]+nums[j];
            if (t==target){
                res.push(i);
                res.push(j);
                return res;
            }
        }
    }
    return res;
};

module.exports={twoSum};