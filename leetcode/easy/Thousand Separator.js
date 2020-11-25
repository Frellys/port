// Given an integer n, add a dot(".") as the thousands separator and return it in string format.

/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    let arr = n.toString().split('');
    let ret = [];
    let cur = '';
    while (arr.length) {
        cur = arr.pop() + cur;
        if (cur.length == 3 || !arr.length) {
            ret.unshift(cur);
            cur = '';
        }
    }
    return ret.join('.');
};