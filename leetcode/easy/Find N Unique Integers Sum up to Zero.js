// Given an integer n, return any array containing n unique integers such that they add up to 0.

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    let ret = [];
    if (n % 2 != 0) {
        ret.push(0);
    }
    for (let i = 1; ret.length < n; i++) {
        ret.push(i);
        ret.push(-i)
    }
    return ret;
};