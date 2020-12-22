// Given a string s.Return all the words vertically in the same order in which they appear in s.
// Words are returned as a list of strings, complete with spaces when is necessary. (Trailing spaces are not allowed).
// Each word would be put on only one column and that in one column there will be only one word.

/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
    let words = s.split(' ');
    let ret = new Array(Math.max.apply(null, words.map(function (w) { return w.length; }))).fill('');
    words.forEach(function (word) {
        for (let i = 0; i < ret.length; i++) {
            ret[i] += (word[i] || ' ');
        }
    });
    return ret.map(function (row) { return row.replace(/[ \s]+$/g, ''); });
};