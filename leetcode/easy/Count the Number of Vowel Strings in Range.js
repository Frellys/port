// You are given a 0-indexed array of string words and two integers left and right.
// A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.
// Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].

/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
    let vowels = 'aeiou'.split('');
    let ret = 0;
    for (let i = left; i <= right; i++) {
        ret += [
            'startsWith',
            'endsWith'
        ].every(f => vowels.some(v => words[i][f](v)));
    }
    return ret;
};