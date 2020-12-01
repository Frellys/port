// You are given a string text of words that are placed among some number of spaces.
// Each word consists of one or more lowercase English letters and are separated by at least one space.
// It's guaranteed that text contains at least one word.
// Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized.
// If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.
// Return the string after rearranging the spaces.

/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
    if (!text.includes(' ')) return text;
    let cnt = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == ' ') cnt++;
    }
    let words = text.split(' ').filter(function (el) { return el != ''; });
    let sep = '';
    if (words.length != 1) {
        while (sep.length < Math.floor(cnt / (words.length - 1))) sep += ' ';
    }
    let ret = words.join(sep);
    while (ret.length < text.length) ret += ' ';
    return ret;
};