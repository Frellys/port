// Given two binary strings a and b, return their sum as a binary string.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let len = Math.max(a.length, b.length);
    while (a.length < b.length) a = '0' + a;
    while (a.length > b.length) b = '0' + b;
    let ret = '';
    let sup = 0;
    for (let i = len - 1; i >= 0; i--) {
        let cur = parseInt(a[i]) + parseInt(b[i]) + sup;
        sup = 0;
        if (cur > 1) {
            sup = 1;
            cur = cur - 2;
        }
        ret = cur + ret;
    }
    if (sup != 0) ret = sup + ret;
    return ret;
};