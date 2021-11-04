// Given a 0 - indexed integer array nums, return the smallest index i of nums such that i mod 10 == nums[i], or - 1 if such index does not exist.
// x mod y denotes the remainder when x is divided by y.

/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function (nums) {
    let ret = -1;
    nums.find(function (n, ndx) {
        if (ndx % 10 === n) {
            ret = ndx;
        }
        return ret >= 0;
    });
    return ret;
};