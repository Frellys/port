// Given an integer array nums of size n, return the number with the value closest to 0 in nums.
// If there are multiple answers, return the number with the largest value.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
    let min = {
        dst: Number.MAX_SAFE_INTEGER,
        val: 0
    };
    let arr = Array.from(new Set(nums));
    arr.forEach(n => {
        let distance = Math.abs(n);
        if (min.dst > distance) {
            min.dst = distance;
            min.val = arr.includes(distance) ? distance : n;
        }
    });
    return min.val;
};