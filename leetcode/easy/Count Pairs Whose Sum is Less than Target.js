// Given a 0-indexed integer array nums of length n and an integer target,
// return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
    return nums.reduce((acc, cur, cdx) => {
        return acc + nums.filter((n, ndx) => ndx > cdx && (cur + n) < target).length;
    }, 0);
};