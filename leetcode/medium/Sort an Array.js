// Given an array of integers nums, sort the array in ascending order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    return nums.sort(function (a, b) { return (a - b); });
};