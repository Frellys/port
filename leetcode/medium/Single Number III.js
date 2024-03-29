// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice.
// Find the two elements that appear only once.You can return the answer in any order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let seen = {};
    nums.forEach(function (el) {
        let key = el.toString();
        if ((key in seen) == false) {
            seen[key] = 0;
        }
        seen[key]++;
    });
    return Object.keys(seen).filter(function (key) { return seen[key] == 1; }).map(function (el) { return parseInt(el); });
};