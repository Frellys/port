// For two strings s and t, we say "t divides s" if and only if s = t + ... + t(t concatenated with itself 1 or more times)
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if (str1.length == 0 || str2.length == 0) return '';
    if (str1[0] != str2[0]) return '';
    let gcd = '';
    let tmp = '';
    let min = Math.min(str1.length, str2.length);
    while (tmp.length < min) {
        tmp += str1[tmp.length];
        let flag = true;
        str1.split(tmp).forEach(function (el) {
            if (el.length != 0) flag = false;
        });
        str2.split(tmp).forEach(function (el) {
            if (el.length != 0) flag = false;
        });
        if (flag) {
            gcd = tmp;
        }
    }
    return gcd;
};