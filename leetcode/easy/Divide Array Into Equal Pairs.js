// You are given an integer array nums consisting of 2 * n integers.
// You need to divide nums into n pairs such that:
// - Each element belongs to exactly one pair.
// - The elements present in a pair are equal.
// Return true if nums can be divided into n pairs, otherwise return false.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    let seen = {};
    nums.forEach(function (n) {
        if (!(n in seen)) {
            seen[n] = 0;
        }
        seen[n]++;
    });
    return Object.values(seen).every(v => !(v % 2));
};