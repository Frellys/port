// Given an integer array nums, return true if there exists a triple of indices(i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k].
// If no such indices exists, return false.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let flag = false;
    let len = nums.length;
    if (len > 2) {
        outer: for (let i = 0; i < len - 2; i++) {
            for (let j = i + 1; j < len - 1; j++) {
                if (nums[i] < nums[j]) {
                    for (let k = j + 1; k < len; k++) {
                        if (nums[j] < nums[k]) {
                            flag = true;
                            break outer;
                        }
                    }
                }
            }
        }
    }
    return flag;
};