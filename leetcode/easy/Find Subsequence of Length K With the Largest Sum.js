// You are given an integer array nums and an integer k.You want to find a subsequence of nums of length k that has the largest sum.
// Return any such subsequence as an integer array of length k.
// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
    let ret = nums.splice(0, k);
    let min = Math.min.apply(null, ret);
    nums.forEach(function (n) {
        if (n > min) {
            ret.push(n);
            ret.splice(ret.indexOf(Math.min.apply(null, ret)), 1);
            min = Math.min.apply(null, ret);
        }
    });
    return ret;
};