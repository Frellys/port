// Given a positive integer num, output its complement number.
// The complement strategy is to flip the bits of its binary representation.

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    return parseInt((num >>> 0).toString(2).split('').map(n => +(n == '0')).join(''), 2);
};