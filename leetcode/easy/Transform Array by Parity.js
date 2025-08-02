// You are given an integer array nums.
// Transform nums by performing the following operations in the exact order specified:
// - Replace each even number with 0.
// - Replace each odd numbers with 1.
// - Sort the modified array in non-decreasing order.
// Return the resulting array after performing these operations.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
    return nums.reduce((acc, cur) => {
        acc[cur % 2]++;
        return acc;
    }, [0, 0]).map((n, ndx) => new Array(n).fill(ndx)).flat();
};