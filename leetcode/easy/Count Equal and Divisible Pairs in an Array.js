// Given a 0 - indexed integer array nums of length n and an integer k,
// return the number of pairs(i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and(i * j) is divisible by k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
    return nums.reduce(function (acc, cur, cdx) {
        let cnt = 0;
        for (let i = cdx + 1; i < nums.length; i++) {
            cnt += (cur == nums[i] && !((cdx * i) % k));
        }
        return acc + cnt;
    }, 0);
};