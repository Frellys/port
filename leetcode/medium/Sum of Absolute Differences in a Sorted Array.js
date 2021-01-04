// You are given an integer array nums sorted in non - decreasing order.
// Build and return an integer array result with the same length as nums
// such that result[i] is equal to the summation of absolute differences between nums[i] and all the other elements in the array.
// In other words, result[i] is equal to sum(| nums[i] - nums[j] |) where 0 <= j < nums.length and j != i(0 - indexed).

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
    let sr = nums.reduce(function (acc, cur) { return acc + cur; }, 0);
    let sl = 0;
    return nums.map(function (n, i) {
        sr -= n;
        sl += n;
        return sr - n * (nums.length - (i + 1) * 2) - sl;
    });
};