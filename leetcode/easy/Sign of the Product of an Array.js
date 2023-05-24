// There is a function signFunc(x) that returns:
// - 1 if x is positive.
// - -1 if x is negative.
// - 0 if x is equal to 0.
// You are given an integer array nums.Let product be the product of all values in the array nums.
// Return signFunc(product).

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    return nums.includes(0) ? 0 : ((nums.filter(n => n < 0).length % 2) ? -1 : 1);
};