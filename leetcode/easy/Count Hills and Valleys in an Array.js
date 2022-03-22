// You are given a 0-indexed integer array nums.
// An index i is part of a hill in nums if the closest non - equal neighbors of i are smaller than nums[i].
// Similarly, an index i is part of a valley in nums if the closest non - equal neighbors of i are larger than nums[i].
// Adjacent indices i and j are part of the same hill or valley if nums[i] == nums[j].
// Note that for an index to be part of a hill or valley, it must have a non-equal neighbor on both the left and right of the index.
// Return the number of hills and valleys in nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
    let ret = 0;
    let arr = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != arr[arr.length - 1]) {
            arr.push(nums[i]);
        }
    }
    for (let i = 1; i < arr.length - 1; i++) {
        let cur = arr[i];
        let prev = arr[i - 1];
        let next = arr[i + 1];
        ret += ((cur < prev && cur < next) || (cur > prev && cur > next));
    }
    return ret;
};