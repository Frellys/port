// Given an integer, write an algorithm to convert it to hexadecimal.For negative integer, two’s complement method is used.

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    return (num >>> 0).toString(16);
};