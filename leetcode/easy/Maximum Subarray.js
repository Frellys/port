// Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        if (max < cur) max = cur;
        for (let j = i + 1; j < nums.length; j++) {
            cur += nums[j];
            if (max < cur) max = cur;
        }
    }
    return max;
};