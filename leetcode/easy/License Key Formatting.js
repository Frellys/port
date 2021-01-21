// You are given a license key represented as a string S which consists only alphanumeric character and dashes.The string is separated into N + 1 groups by N dashes.
// Given a number K, we would want to reformat the strings such that each group contains exactly K characters,
// except for the first group which could be shorter than K, but still must contain at least one character.
// Furthermore, there must be a dash inserted between two groups and all lowercase letters should be converted to uppercase.
// Given a non - empty string S and a number K, format the string according to the rules described above.

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
    let ret = [];
    let cur = '';
    S.toUpperCase().replace(/\-/g, '').split('').reverse().forEach(function (ch) {
        cur = ch + cur;
        if (cur.length == K) {
            ret.push(cur);
            cur = '';
        }
    });
    if (cur.length != 0) ret.push(cur);
    return ret.reverse().join('-');
};