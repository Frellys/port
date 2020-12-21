// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.
// Find this single element that appears only once.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let ret;
    let len = nums.length;
    for (let i = 0; i < len; i += 2) {
        if (nums[i] != nums[i + 1]) {
            ret = nums[i];
            break;
        }
    }
    return ret;
};