// Write a function that takes an unsigned integer and returns the number of '1' bits it has(also known as the Hamming weight).

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    return (n.toString(2).split('').filter(function (n) { return (n == '1'); }).length);
};