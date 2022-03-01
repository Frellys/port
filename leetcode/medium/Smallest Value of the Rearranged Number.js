// You are given an integer num.
// Rearrange the digits of num such that its value is minimized and it does not contain any leading zeros.
// Return the rearranged number with minimal value.
// Note that the sign of the number does not change after rearranging the digits.

/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function (num) {
    let ret = '';
    let arr = Math.abs(num).toString().split('').map(n => +n);
    if (num < 0) {
        ret = '-' + arr.sort((a, b) => b - a).join('');
    }
    else {
        arr.sort((a, b) => a - b);
        let zeroes = arr.filter(n => !n).length;
        arr = arr.filter(Boolean);
        ret += ((arr.shift() || 0) + new Array(zeroes).fill(0).join('') + arr.join(''));
    }
    return +ret;
};