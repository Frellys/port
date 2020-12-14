// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e., [0, 1, 2, 4, 5, 6, 7] might become[4, 5, 6, 7, 0, 1, 2]).
// Return the minimum element of this array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    return nums.sort(function (a, b) {
        return a - b;
    }).shift();
};