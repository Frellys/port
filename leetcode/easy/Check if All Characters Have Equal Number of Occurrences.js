// Given a string s, return true if s is a good string, or false otherwise.
// A string s is good if all the characters that appear in s have the same number of occurrences(i.e., the same frequency).

/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    let seen = {};
    for (let ch of s) {
        if ((ch in seen) == false) {
            seen[ch] = 0;
        }
        seen[ch]++;
    }
    return new Set(Object.values(seen)).size == 1;
};