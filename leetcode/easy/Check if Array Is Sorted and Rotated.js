// Given an array nums, return true if the array was originally sorted in non - decreasing order, then rotated some number of positions(including zero).
// Otherwise, return false.
// There may be duplicates in the original array.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let orig = nums.slice().sort(function (a, b) { return (a - b); }).join(',');
    let ret = false;
    let len = nums.length;
    while (!ret && len) {
        if (nums.join(',') == orig) {
            ret = true;
        }
        nums.unshift(nums.pop());
        len--;
    }
    return ret;
};