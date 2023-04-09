// You are given a positive integer array nums.
// - The element sum is the sum of all the elements in nums.
// - The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.
// Note that the absolute difference between two integers x and y is defined as |x - y|.

/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let a = nums.reduce((acc, cur) => acc + cur, 0);
    let b = nums.join('').split('').map(el => +el).reduce((acc, cur) => acc + cur, 0);
    return Math.abs(a - b);
};