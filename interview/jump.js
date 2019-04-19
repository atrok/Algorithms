/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    
    
	var jumps = 0, curEnd = 0, curFarthest = 0;
	for (var i = 0; i < nums.length - 1; i++) {
		curFarthest = Math.max(curFarthest, i + nums[i]);
		if (i == curEnd) {
			jumps++;
			curEnd = curFarthest;
		}
	}
	return jumps;
    
};

module.exports={jump: jump};