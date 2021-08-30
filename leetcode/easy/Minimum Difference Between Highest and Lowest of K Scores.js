// You are given a 0 - indexed integer array nums, where nums[i] represents the score of the ith student.
// You are also given an integer k.
// Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.
// Return the minimum possible difference.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
    let ret = 0;
    if (k > 1) {
        nums.sort((a, b) => (a - b));
        k--;
        ret = nums[k] - nums[0];
        for (let i = k + 1; i < nums.length; i++) {
            let cur = nums[i] - nums[i - k];
            if (ret > cur) {
                ret = cur;
            }
        }
    }
    return ret;
};