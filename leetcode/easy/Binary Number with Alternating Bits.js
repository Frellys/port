// Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    let ret = true;
    (n >>> 0).toString(2).split('').forEach(function (el, idx, arr) {
        if (ret && idx != 0) {
            if (el == arr[idx - 1]) ret = false;
        }
    });
    return ret;
};