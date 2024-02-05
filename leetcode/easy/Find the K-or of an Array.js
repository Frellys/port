// You are given a 0-indexed integer array nums, and an integer k.
// The K-or of nums is a non-negative integer that satisfies the following:
// - The ith bit is set in the K-or if and only if there are at least k elements of nums in which bit i is set.
// Return the K-or of nums.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function (nums, k) {
    return Object.entries(nums.reduce((acc, cur, cdx) => {
        cur.toString(2).split('').reverse().forEach((bit, bdx) => {
            if (+bit) {
                acc[bdx] = (acc[bdx] || 0) + 1;
            }
        });
        return acc;
    }, {})).reduce((acc, [key, value]) => {
        return acc += ((value >= k) ? Math.pow(2, key) : 0);
    }, 0);
};