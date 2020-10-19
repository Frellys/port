// Given a 32 - bit signed integer, reverse digits of an integer.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let isPositive = x > 0 ? true : false;
    let str = Math.abs(x).toString().split('');
    if (!isPositive) str.push('-');
    let res = parseInt(str.reverse().join(''));
    return (Math.abs(res) > Math.pow(2, 31) - 1) ? 0 : res;
};