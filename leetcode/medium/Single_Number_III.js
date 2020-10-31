// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice.
// Find the two elements that appear only once.You can return the answer in any order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let seen = {};
    nums.forEach(function (el) {
        if (el in seen) {
            seen[el.toString()]++;
        }
        else {
            seen[el.toString()] = 1;
        }
    });
    let ret = [];
    Object.keys(seen).forEach(function (el) {
        if (seen[el] == 1) ret.push(parseInt(el));
    });
    return ret;
};