// A string is good if there are no repeated characters.
// Given a string s, return the number of good substrings of length three in s.
// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
// A substring is a contiguous sequence of characters in a string.

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    let ret = 0;
    for (let i = 2; i < s.length; i++) {
        let a = s[i];
        let b = s[i - 1];
        let c = s[i - 2];
        if (a != b && a != c && b != c) {
            ret++;
        }
    }
    return ret;
};