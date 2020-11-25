// We are given two sentences A and B.  (A sentence is a string of space separated words.Each word consists only of lowercase letters.)
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
// Return a list of all uncommon words.
// You may return the list in any order.

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
    let seen = {};
    A.split(' ').forEach(function (word) {
        seen[word] = (word in seen) ? seen[word] + 1 : 1;
    });
    B.split(' ').forEach(function (word) {
        seen[word] = (word in seen) ? seen[word] + 1 : 1;
    });
    let ret = [];
    Object.keys(seen).forEach(function (key) {
        if (seen[key] == 1) ret.push(key);
    });
    return ret;
};