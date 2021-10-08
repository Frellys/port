// The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.
// - For example, the XOR total of the array[2, 5, 6] is 2 XOR 5 XOR 6 = 1.
// Given an array nums, return the sum of all XOR totals for every subset of nums.
// Note: Subsets with the same elements should be counted multiple times.
// An array a is a subset of an array b if a can be obtained from b by deleting some(possibly zero) elements of b.

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    let sum = 0;
    let traverse = function (cur, idx) {
        let s = cur ^ nums[idx];
        sum += s;
        for (let i = idx + 1; i < nums.length; i++) {
            traverse(s, i);
        }
    };
    nums.forEach(function (el, edx) {
        traverse(0, edx);
    });
    return sum;
};