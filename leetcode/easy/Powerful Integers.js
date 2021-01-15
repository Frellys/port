// Given two positive integers x and y, an integer is powerful if it is equal to x ^ i + y ^ j for some integers i >= 0 and j >= 0.
// Return a list of all powerful integers that have value less than or equal to bound.
// You may return the answer in any order.In your answer, each value should occur at most once.

/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
    let ret = [];
    let i = 0;
    while (true) {
        let pow_x = Math.pow(x, i);
        if (pow_x > bound) break;
        let j = 0;
        while (true) {
            let cur = pow_x + Math.pow(y, j);
            if (cur > bound) break;
            ret.push(cur);
            if (y == 1) break;
            j++;
        }
        if (x == 1) break;
        i++;
    }
    return Array.from(new Set(ret));
};