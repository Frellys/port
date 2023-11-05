// You are given an integer n that consists of exactly 3 digits.
// We call the number n fascinating if, after the following modification,
// the resulting number contains all the digits from 1 to 9 exactly once and does not contain any 0's:
// - Concatenate n with the numbers 2 * n and 3 * n.
// Return true if n is fascinating, or false otherwise.

/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
    return new Array(3).fill(0).map((el, edx) => ++edx * n).join('').split('').sort().join('') == '123456789';
};