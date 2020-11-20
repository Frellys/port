// Given an array nums of integers, return how many of them contain an even number of digits.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let ret = 0;
    nums.forEach(function (num) {
        if (num.toString().length % 2 == 0) ret++;
    });
    return ret;
};