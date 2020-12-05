// Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value.
// And you need to output the maximum average value.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let avg = sum / k;
    for (let i = 0; i < nums.length - k; i++) {
        sum -= nums[i];
        sum += nums[i + k];
        let tmp = sum / k;
        if (avg < tmp) avg = tmp;
    }
    return avg;
};