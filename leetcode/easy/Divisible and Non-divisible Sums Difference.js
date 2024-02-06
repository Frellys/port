// You are given positive integers n and m.
// Define two integers, num1 and num2, as follows:
// - num1: The sum of all integers in the range [1, n] that are not divisible by m.
// - num2: The sum of all integers in the range [1, n] that are divisible by m.
// Return the integer num1 - num2.

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
    return new Array(n).fill(false).reduce((acc, cur, cdx) => {
        return acc += ++cdx * ((cdx % m) ? 1 : -1);
    }, 0);
};