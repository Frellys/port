// Given a string s and a string t, check if s is subsequence of t.
// A subsequence of a string is a new string which is formed from the original string
// by deleting some(can be none) of the characters without disturbing the relative positions of the remaining characters.
// (ie, "ace" is a subsequence of "abcde" while "aec" is not).

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let arr = s.split('').reverse();
    for (let i = t.length - 1; i > -1 && arr.length > 0; i--) {
        if (t[i] == arr[0]) arr.shift();
    }
    return (arr.length == 0);
};