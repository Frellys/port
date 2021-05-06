// Given an integer n(in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.
// After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10.

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
    return n.toString(k).split('').map(n => parseInt(n)).reduce(function (a, b) { return a + b; });
};