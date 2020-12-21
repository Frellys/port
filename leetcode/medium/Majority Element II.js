// Given an integer array of size n, find all elements that appear more than [n / 3] times.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let seen = {};
    nums.forEach(function (el) {
        if (el.toString() in seen) {
            seen[el.toString()] += 1;
        }
        else {
            seen[el.toString()] = 1;
        }
    });
    let ret = [];
    Object.keys(seen).forEach(function (key) {
        if (seen[key] > nums.length / 3) ret.push(parseInt(key));
    });
    return ret;
};