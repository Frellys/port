// Given a binary string s and an integer k.
// Return True if every binary code of length k is a substring of s.
// Otherwise, return False.

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
    let cur = new Array(k).fill(0).join('');
    let len = cur.length;
    let flag = true;
    while (cur.length == len) {
        if (!s.includes(cur)) {
            flag = false;
            break;
        }
        cur = (parseInt(cur, 2) + 1).toString(2);
        while (cur.length < len) cur = '0' + cur;
    };
    return flag;
};