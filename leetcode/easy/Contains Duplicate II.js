// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that
// nums[i] = nums[j] and the absolute difference between i and j is at most k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (j - i > k) break;
            if (nums[i] == nums[j]) return true;
        }
    }
    return false;
};