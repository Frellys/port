// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers.You may assume that each input would have exactly one solution.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let diff = Math.abs((nums[0] + nums[1] + nums[2]) - target);
    let sum = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let temp = Math.abs((nums[i] + nums[j] + nums[k]) - target);
                if (diff > temp) {
                    diff = temp;
                    sum = nums[i] + nums[j] + nums[k];
                }
            }
        }
    }
    return sum;
};