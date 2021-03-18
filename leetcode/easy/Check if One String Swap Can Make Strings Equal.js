// You are given two strings s1 and s2 of equal length.
// A string swap is an operation where you choose two indices in a string(not necessarily different) and swap the characters at these indices.
// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings.
// Otherwise, return false.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    let ret = true;
    let len = s1.length;
    let diff = {
        's1': '',
        's2': ''
    };
    for (let i = 0; i < len; i++) {
        if (s1[i] != s2[i]) {
            diff['s1'] += s1[i];
            diff['s2'] += s2[i];
            if (diff['s1'].length > 2) {
                ret = false;
                break;
            }
        }
    }
    if (ret) {
        ret = (diff['s1'] == diff['s2'].split('').reverse().join(''));
    }
    return ret;
};