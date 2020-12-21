// Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 <= i <= j < n.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
    let max = 0;
    let len = nums.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            let tmp = nums[i] ^ nums[j];
            if (max < tmp) max = tmp;
        }
    }
    return max;
};