// Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence(i.e.subarray).
// The subsequence must be strictly increasing.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let max;
    if (nums.length == 0) {
        max = 0;
    }
    else {
        max = 1;
        for (let i = 0; i < nums.length - 1; i++) {
            let temp = 1;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] > nums[j - 1]) {
                    temp++;
                }
                else {
                    break;
                }
            }
            if (max < temp) max = temp;
        }
    }
    return max;
};