// Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
    return nums.filter(el => nums.some(n => n > el) && nums.some(n => n < el)).length;
};