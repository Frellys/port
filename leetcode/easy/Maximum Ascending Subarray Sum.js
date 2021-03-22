// Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.
// A subarray is defined as a contiguous sequence of numbers in an array.
// A subarray[numsl, numsl + 1, ..., numsr - 1, numsr] is ascending if for all i where l <= i < r, numsi < numsi + 1.
// Note that a subarray of size 1 is ascending.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let maxsum = nums[0];
    let cursum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            cursum += nums[i];
        }
        else {
            if (maxsum < cursum) {
                maxsum = cursum;
            }
            cursum = nums[i];
        }
    }
    if (maxsum < cursum) {
        maxsum = cursum;
    }
    return maxsum;
};