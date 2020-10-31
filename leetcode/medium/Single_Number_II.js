// Given a non - empty array of integers, every element appears three times except for one, which appears exactly once.Find that single one.

/**
 * @param {number[]} nums
 * @return {number}
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
    let ret;
    Object.keys(seen).forEach(function (el) {
        if (ret == undefined) {
            if (seen[el] == 1) ret = el;
        }
    });
    return parseInt(ret);
};