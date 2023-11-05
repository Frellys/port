// You are given an array nums of positive integers and an integer k.
// In one operation, you can remove the last element of the array and add it to your collection.
// Return the minimum number of operations needed to collect elements 1, 2, ..., k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let cache = new Array(k).fill(false);
    return nums.reverse().findIndex(n => {
        if (n <= k) {
            cache[n - 1] = true;
        }
        return cache.every(Boolean);
    }) + 1;
};