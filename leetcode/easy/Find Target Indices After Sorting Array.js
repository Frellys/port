// You are given a 0 - indexed integer array nums and a target element target.
// A target index is an index i such that nums[i] == target.
// Return a list of the target indices of nums after sorting nums in non - decreasing order.
// If there are no target indices, return an empty list.
// The returned list must be sorted in increasing order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    let ret = [];
    nums.sort(function (a, b) { return (a - b); });
    for (let i = 0; i < nums.length && nums[i] <= target; i++) {
        if (nums[i] === target) {
            ret.push(i);
        }
    }
    return ret;
};