/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums) {
    var nums1 = nums[0].sort(function (a, b) {
        return a - b;
    });
    var nums2 = nums[1].sort(function (a, b) {
        return a - b;
    });
    console.log(nums1.toString());
    console.log(nums2.toString());
    if (nums1.length < nums2.length) {//swap arrays
        var t = nums1;
        nums1 = nums2
        nums2 = t;
    }
    var length_a = nums1.length, length_b = nums2.length;

    var res = [];
    var i = 0;
    var start = 0;
    var ind_a = start, ind_b = 0;

    while (ind_a < length_a && ind_b < length_b) {
        console.log("Precheck: a " + ind_a + " nums1[" + ind_a + "]:" + nums1[ind_a] + " b: " + ind_b + "  nums2[" + ind_b + "]:" + nums2[ind_b]);
        if (nums1[ind_a] == nums2[ind_b]) {
            res.push(nums1[ind_a]);
            start = ind_a + 1;

            console.log("Found match: " + nums1[ind_a] + " next start position:" + start);
            ind_b++;
            ind_a++;

        } else {

            ind_a++;
        }

        if (ind_a == length_a && ind_b < length_b) {
            ind_a = start;
            ind_b++;
        }

    }
    return res;


};

module.exports = { intersect: intersect }