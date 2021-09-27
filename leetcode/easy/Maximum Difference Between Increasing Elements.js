// Given a 0 - indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j]
// (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].
// Return the maximum difference.
// If no such i and j exists, return -1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    nums.reverse();
    let max = -1;
    nums.forEach(function (n, ndx) {
        for (let i = ndx + 1; i < nums.length; i++) {
            max = Math.max(max, n - nums[i]);
        }
    });
    return max || -1;
};