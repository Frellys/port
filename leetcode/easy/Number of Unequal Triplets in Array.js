// You are given a 0-indexed array of positive integers nums.
// Find the number of triplets (i, j, k) that meet the following conditions:
// - 0 <= i < j < k < nums.length
// - nums[i], nums[j], and nums[k] are pairwise distinct.
//   In other words, nums[i] != nums[j], nums[i] != nums[k], and nums[j] != nums[k].
// Return the number of triplets that meet the conditions.

/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
    let ret = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] != nums[j]) {
                for (let k = j + 1; k < nums.length; k++) {
                    ret += (nums[i] != nums[k] && nums[j] != nums[k]);
                }
            }
        }
    }
    return ret;
};