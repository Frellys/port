// Given an array, rotate the array to the right by k steps, where k is non - negative.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (k > nums.length) k = k % nums.length;
    while (k > 0) {
        nums.unshift(nums.pop())
        k--;
    }
};