// Given an array nums, you are allowed to choose one element of nums and change it by any value in one move.
// Return the minimum difference between the largest and smallest value of nums after perfoming at most 3 moves.

/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
    let min = Number.MAX_SAFE_INTEGER;
    let len = nums.length;
    function diff(arr) {
        return ((arr.length == 0) ? 0 : Math.max.apply(null, arr) - Math.min.apply(null, arr));
    }
    nums.sort(function (a, b) { return (a - b); });
    for (let i = 0; i < 3; i++) {
        min = Math.min(min, diff(nums.slice(0, len - 3)), diff(nums.slice(3)));
        nums.push(nums.shift());
    }
    return min;
};