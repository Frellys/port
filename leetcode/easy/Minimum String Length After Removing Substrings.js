// You are given a string s consisting only of uppercase English letters.
// You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.
// Return the minimum possible length of the resulting string that you can obtain.

/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    let reg = /AB|CD/;
    while (reg.test(s)) {
        s = s.replace(reg, '');
    }
    return s.length;
};