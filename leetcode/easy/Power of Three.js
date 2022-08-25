// Given an integer, write a function to determine if it is a power of three.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    let pow = Math.log10(n) / Math.log10(3);
    return (n > 0) && !(pow - Math.floor(pow));
};