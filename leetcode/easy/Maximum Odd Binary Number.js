// You are given a binary string s that contains at least one '1'.
// You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.
// Return a string representing the maximum odd binary number that can be created from the given combination.
// Note that the resulting string can have leading zeros.

/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
    let arr = s.split('').map(Number).sort().reverse();
    return arr.concat(arr.shift()).join('');
};