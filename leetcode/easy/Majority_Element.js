// Given an array of size n, find the majority element.The majority element is the element that appears more than n / 2 times.
// You may assume that the array is non - empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    let cur = nums[0];
    let cnt = 1;
    for (let i = 1; i < nums.length; i++) {
        if (cur != nums[i]) {
            cur = nums[i];
            cnt = 1;
        }
        else {
            cnt++;
        }
        if (cnt > nums.length / 2) break;
    }
    return cur;
};