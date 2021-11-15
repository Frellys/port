// Two strings word1 and word2 are considered almost equivalent if the differences between the frequencies of each letter from 'a' to 'z' between word1 and word2 is at most 3.
// Given two strings word1 and word2, each of length n, return true if word1 and word2 are almost equivalent, or false otherwise.
// The frequency of a letter x is the number of times it occurs in the string.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let freq = Object.fromEntries(alphabet.map(c => [c, [0, 0]]));
    [word1, word2].forEach(function (w, wdx) {
        for (let c of w) {
            freq[c][wdx]++;
        }
    });
    return Object.values(freq).every(function (f) {
        return Math.abs(f[0] - f[1]) <= 3;
    });
};