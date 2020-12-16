// Reverse bits of a given 32 bits unsigned integer.

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let bitStr = n.toString(2);
    while (bitStr.length < 32) bitStr = '0' + bitStr;
    return parseInt(bitStr.split('').reverse().join(''), 2);
};