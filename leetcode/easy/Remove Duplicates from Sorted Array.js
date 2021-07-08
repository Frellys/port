// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let cnt = 0;
        let del = i;
        while (nums[del] == nums[++del]) cnt++;
        nums.splice(i, cnt);
    }
};