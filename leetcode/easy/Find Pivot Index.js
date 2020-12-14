// Given an array of integers nums, write a method that returns the "pivot" index of this array.
// We define the pivot index as the index where the sum of all the numbers to the left of the index is equal to the sum of all the numbers to the right of the index.
// If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left - most pivot index.

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    if (nums.length == 0) return -1;
    let lsum = 0;
    let rsum = nums.reduce(function (a, b) { return a + b; });
    let ret = false;
    for (let i = 0; i < nums.length; i++) {
        rsum -= nums[i];
        if (lsum == rsum) {
            ret = i;
            break;
        }
        lsum += nums[i];
    }
    return (ret === false) ? -1 : ret;
};