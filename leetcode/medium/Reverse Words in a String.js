// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non - space characters.The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.split(' ').filter(el => el.length).reverse().join(' ');
};