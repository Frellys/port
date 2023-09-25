// You are given a 0-indexed integer array nums and an integer k.
// Return an integer that denotes the sum of elements in nums whose corresponding indices have exactly k set bits in their binary representation.
// The set bits in an integer are the 1's present when it is written in binary.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
    return nums.filter((n, ndx) => ndx.toString(2).split('').map(Number).filter(Boolean).length == k).reduce((a, c) => a + c, 0);
};