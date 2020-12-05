// Two strings are considered close if you can attain one from the other using the following operations:
// - Operation 1: Swap any two existing characters.
//   For example, abcde -> aecdb
// - Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
//   For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.
// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length != word2.length) return false;
    let len = word1.length;
    let freq1 = {};
    let freq2 = {};
    for (let i = 0; i < len; i++) {
        freq1[word1[i]] = (word1[i] in freq1) ? freq1[word1[i]] + 1 : 1;
        freq2[word2[i]] = (word2[i] in freq2) ? freq2[word2[i]] + 1 : 1;
    }
    let k1 = Object.keys(freq1).sort();
    let k2 = Object.keys(freq2).sort();
    if (k1.join('') != k2.join('')) return false;
    let v1 = Object.values(freq1).sort();
    let v2 = Object.values(freq2).sort();
    return (v1.join('') == v2.join(''));
};