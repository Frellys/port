// Given a non negative integer number num.
// For every numbers i in the range 0 <= i <= num calculate the number of 1's in their binary representation and return them as an array.

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    let ret = [];
    for (let i = 0; i <= num; i++) {
        ret.push((i >>> 0).toString(2).split('').filter(function (val) { return val == '1'; }).length);
    }
    return ret;
};