// Given an array nums with n objects colored red, white, or blue, sort them in -place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) nums.unshift(nums.splice(i, 1)[0]);
    }
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] == 2) nums.push(nums.splice(i, 1)[0]);
    }
};