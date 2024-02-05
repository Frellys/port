// You are given a 0-indexed integer array nums.
// Return the maximum value over all triplets of indices (i, j, k) such that i < j < k.
// If all such triplets have a negative value, return 0.
// The value of a triplet of indices (i, j, k) is equal to (nums[i] - nums[j]) * nums[k].

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let val = (nums[i] - nums[j]) * nums[k];
                if (max < val) {
                    max = val;
                }
            }
        }
    }
    return Math.max(0, max);
};