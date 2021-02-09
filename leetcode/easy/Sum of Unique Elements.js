// You are given an integer array nums.
// The unique elements of an array are the elements that appear exactly once in the array.
// Return the sum of all the unique elements of nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let freq = {};
    nums.forEach(function (n) {
        let key = n.toString();
        freq[key] = (key in freq) ? freq[key] + 1 : 1;
    });
    let ret = 0;
    Object.keys(freq).forEach(function (key) {
        if (freq[key] == 1) ret += parseInt(key);
    });
    return ret;
};