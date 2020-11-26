// You are given an array nums of non - negative integers.
// nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.
// Notice that x does not have to be an element in nums.
// Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    let ret = -1;
    for (let i = 0; i <= nums.length; i++) {
        let cur = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] >= i) cur++;
        }
        if (cur == i) {
            ret = cur;
            break;
        }
    }
    return ret;
};