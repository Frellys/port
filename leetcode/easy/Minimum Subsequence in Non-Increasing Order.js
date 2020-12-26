// Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence.
// If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions,
// return the subsequence with the maximum total sum of all its elements.
// A subsequence of an array can be obtained by erasing some(possibly zero) elements from the array.
// Note that the solution with the given constraints is guaranteed to be unique.
// Also return the answer sorted in non - increasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
    nums.sort(function (a, b) { return (a - b); });
    let numSum = nums.reduce(function (a, b) { return (a + b); }, 0);
    let ret = [];
    let retSum = 0;
    while (true) {
        let tmp = nums.pop();
        ret.push(tmp);
        retSum += tmp;
        numSum -= tmp;
        if (numSum < retSum) break;
    }
    return ret;
};