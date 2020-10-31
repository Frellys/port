// Given a non - empty array of integers nums, every element appears twice except for one.Find that single one.
// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory ?

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    if (nums.length == 1) return nums[0];
    nums.sort(function (a, b) {
        return a - b;
    });
    let ret;
    if (nums[0] != nums[1]) return nums[0];
    if (nums[nums.length - 1] != nums[nums.length - 2]) return nums[nums.length - 1];
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1] || nums[i] == nums[i - 1]) continue;
        else {
            ret = nums[i];
            break;
        }
    }
    return ret;
};