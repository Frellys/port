// Given an unsorted integer array nums, find the smallest missing positive integer.

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    if (nums.length == 0) return 1;
    let max = Math.max(...nums);
    if (max < 1) return 1;
    for (let i = 1; i <= max + 1; i++) {
        if (!nums.includes(i)) return i;
    }
};