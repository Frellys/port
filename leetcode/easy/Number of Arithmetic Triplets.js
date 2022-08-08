// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff.
// A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:
// - i < j < k,
// - nums[j] - nums[i] == diff, and
// - nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] - nums[i] === diff) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[k] - nums[j] === diff) {
                        cnt++;
                    }
                }
            }
        }
    }
    return cnt;
};