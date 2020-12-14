// You are given a string allowed consisting of distinct characters and an array of strings words.
// A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let ret = 0;
    words.forEach(function (word) {
        if (word.split('').every(function (ch) { return allowed.includes(ch); })) ret++;
    });
    return ret;
};