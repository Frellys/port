// Given an integer n and an integer start.
// Define an array nums where nums[i] = start + 2 * i(0 - indexed) and n == nums.length.
// Return the bitwise XOR of all elements of nums.

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    let arr = [];
    for (let i = start; arr.length < n; i += 2) {
        arr.push(i);
    }
    let ret = arr[0];
    for (let i = 1; i < arr.length; i++) {
        ret = ret ^ arr[i];
    }
    return ret;
};