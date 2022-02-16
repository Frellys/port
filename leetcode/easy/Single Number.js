// Given a non - empty array of integers nums, every element appears twice except for one.Find that single one.
// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory ?

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let seen = {};
    nums.forEach(function (n) {
        if ((n in seen)) {
            delete seen[n];
        }
        else {
            seen[n] = true;
        }
    });
    return +Object.keys(seen).find(k => seen[k]);
};