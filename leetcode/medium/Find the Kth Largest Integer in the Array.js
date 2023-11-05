// You are given an array of strings nums and an integer k.
// Each string in nums represents an integer without leading zeros.
// Return the string that represents the kth largest integer in nums.

/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function (nums, k) {
    return nums.map(BigInt).sort((a, b) => (a < b) || -1)[k - 1].toString();
};