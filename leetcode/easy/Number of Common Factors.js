// Given two positive integers a and b, return the number of common factors of a and b.
// An integer x is a common factor of a and b if x divides both a and b.

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
    let ret = 0;
    let arr = Array.from(arguments);
    let cap = Math.min.apply(null, arr);
    for (let i = 1; i <= cap; i++) {
        ret += arr.every(n => !(n % i));
    }
    return ret;
};