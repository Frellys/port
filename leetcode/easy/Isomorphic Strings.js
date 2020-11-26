// Given two strings s and t, determine if they are isomorphic.
// Two strings are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character but a character may map to itself.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (s[j] == s[i] && t[j] != t[i]) return false;
            if (t[j] == t[i] && s[j] != s[i]) return false;
        }
    }
    return true;
};