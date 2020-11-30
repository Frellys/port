// Given a positive integer num, output its complement number.
// The complement strategy is to flip the bits of its binary representation.

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    let bin = (num >>> 0).toString(2).split('');
    for (let i = 0; i < bin.length; i++) {
        bin[i] = (bin[i] == '0') ? '1' : '0';
    }
    return parseInt(bin.join(''), 2);
};