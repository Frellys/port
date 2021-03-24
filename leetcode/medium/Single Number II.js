// Given a non - empty array of integers, every element appears three times except for one, which appears exactly once.
// Find that single one.

/**
 * @param {number[]} nums
 * @return {number}
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
    return parseInt(Object.entries(seen).filter(function (e) { return e[1] == 1; })[0]);
};