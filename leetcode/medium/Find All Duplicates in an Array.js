// Given an array of integers, 1 <= a[i] <= n (n = size of array), some elements appear twice and others appear once.
// Find all the elements that appear twice in this array.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let ret = [];
    nums.forEach(function (n, ndx) {
        if (nums.lastIndexOf(n) != ndx) ret.push(n);
    });
    return ret;
};