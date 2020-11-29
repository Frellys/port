// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// You must do this in -place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            cnt++;
            nums.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < cnt; i++) {
        nums.push(0);
    }
};