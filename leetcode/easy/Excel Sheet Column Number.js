// Given a column title as appear in an Excel sheet, return its corresponding column number.

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return s.split('').reduce(function (acc, ch, idx, arr) {
        return acc + (alphabet.indexOf(ch) + 1) * Math.pow(26, arr.length - idx - 1);
    }, 0);
};