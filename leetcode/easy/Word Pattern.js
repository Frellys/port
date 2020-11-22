// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non - empty word in s.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let words = s.split(' ');
    if (pattern.length != words.length) {
        return false;
    }
    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        let word = words[i];
        for (let j = 0; j < pattern.length; j++) {
            if (char == pattern[j]) {
                if (word != words[j]) return false;
            }
            if (word == words[j]) {
                if (char != pattern[j]) return false;
            }
        }
    }
    return true;
};