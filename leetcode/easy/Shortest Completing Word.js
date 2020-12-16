// Given a string licensePlate and an array of strings words, find the shortest completing word in words.
// A completing word is a word that contains all the letters in licensePlate.
// Ignore numbers and spaces in licensePlate, and treat letters as case insensitive.
// If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.
// For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b'(ignoring case), and 'c' twice.
// Possible completing words are "abccdef", "caaacab", and "cbca".
// Return the shortest completing word in words.
// It is guaranteed an answer exists.
// If there are multiple shortest completing words, return the first one that occurs in words.

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    let pattern = {};
    for (let ch of licensePlate) {
        if (ch.match(/[a-z]/i)) {
            let key = ch.toLowerCase();
            pattern[key] = (key in pattern) ? pattern[key] + 1 : 1;
        }
    }
    let ret = '';
    words.forEach(function (el) {
        let flag = true;
        Object.keys(pattern).forEach(function (ch) {
            if (flag && el.split('').filter(function (wch) { return wch == ch; }).length < pattern[ch]) flag = false;
        });
        if (flag && (!ret.length || ret.length > el.length)) ret = el;
    });
    return ret;
};