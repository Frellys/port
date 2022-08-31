// Given a 2D integer array nums where nums[i] is a non - empty array of distinct positive integers,
// return the list of integers that are present in each array of nums sorted in ascending order.

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
    let ret = [];
    if (nums.length) {
        ret = nums[0].filter(el => nums.every(a => a.includes(el)));
    }
    return ret.sort((a, b) => a - b);
};