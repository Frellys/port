// Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.
// Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.

/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
    let arr = nums.filter((n) => !(n % 6));
    return (arr.length) ? Math.floor(arr.reduce((acc, cur) => acc + cur, 0) / arr.length) : 0;
};