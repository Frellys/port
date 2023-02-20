// Given a sorted array of distinct integers and a target value,
// return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (target > nums[nums.length - 1]) {
        return nums.length;
    }
    for (let i = 0; i < nums.length; i++) {
        if (target <= nums[i]) {
            return i;
        }
        else {
            if (target < nums[i + 1]) {
                return i + 1;
            }
        }
    }
};