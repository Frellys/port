// Given an integer array nums that does not contain any zeros,
// find the largest positive integer k such that -k also exists in the array.
// Return the positive integer k. If there is no such integer, return -1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    return Array.from(new Set(nums.filter(n => n > 0))).reduce((acc, n) => {
        if (nums.includes(-n)) {
            acc = Math.max(acc, n);
        }
        return acc;
    }, -1);
};