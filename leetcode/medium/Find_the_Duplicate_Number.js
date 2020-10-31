// Given an array of integers nums containing n + 1 integers where each integer is in the range[1, n] inclusive.
// There is only one duplicate number in nums, return this duplicate number.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let seen = [];
    let ret;
    for (let i = 0; i < nums.length; i++) {
        if (seen.includes(nums[i])) {
            ret = nums[i];
            break;
        }
        else {
            seen.push(nums[i]);
        }
    }
    return ret;
};