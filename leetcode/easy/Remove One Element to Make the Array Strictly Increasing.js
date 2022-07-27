// Given a 0-indexed integer array nums,
// return true if it can be made strictly increasing after removing exactly one element, or false otherwise.
// If the array is already strictly increasing, return true.
// The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
    return nums.some((el, edx) => {
        return nums.filter((f, fdx) => fdx != edx).every((a, adx, arr) => !adx || a > arr[adx - 1]);
    });
};