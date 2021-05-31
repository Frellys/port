// Given an integer array of size n, find all elements that appear more than [n / 3] times.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let seen = {};
    nums.forEach(function (el) {
        let key = el.toString();
        if ((key in seen) == false) {
            seen[key] = 0;
        }
        seen[key]++;
    });
    return Object.keys(seen).filter(function (key) { return (seen[key] > nums.length / 3); }).map(Number);
};