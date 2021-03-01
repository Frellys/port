// You are given two strings word1 and word2.
// Merge the strings by adding letters in alternating order, starting with word1.
// If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let a1 = word1.split('').reverse();
    let a2 = word2.split('').reverse();
    let ret = '';
    while (a1.length && a2.length) {
        ret += a1.pop();
        ret += a2.pop();
    }
    while (a1.length) ret += a1.pop();
    while (a2.length) ret += a2.pop();
    return ret;
};