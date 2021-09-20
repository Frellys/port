// Given an integer array nums and an integer k, return the number of pairs(i, j) where i < j such that | nums[i] - nums[j] | == k.
// The value of | x | is defined as:
// x if x >= 0.
// -x if x < 0.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
    let ret = 0;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                ret++;
            }
        }
    }
    return ret;
};