// In a given integer array nums, there is always exactly one largest element.
// Find whether the largest element in the array is at least twice as much as every other number in the array.
// If it is, return the index of the largest element, otherwise return -1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let max = nums[0];
    let mdx = 0;
    nums.forEach(function (el, idx) {
        if (max < el) {
            max = el;
            mdx = idx;
        }
    });
    let flag = true;
    nums.forEach(function (el, idx) {
        if (flag && idx != mdx) {
            if (el * 2 > max) flag = false;
        }
    });
    return (flag) ? mdx : -1;
};