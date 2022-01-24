// You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters.
// Capitalize the string by changing the capitalization of each word such that:
// - If the length of the word is 1 or 2 letters, change all letters to lowercase.
// - Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.

/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    return title.split(' ').map(function (w) {
        const ch = w.toLowerCase().split('');
        if (ch.length > 2) {
            ch[0] = ch[0].toUpperCase();
        }
        return ch.join('');
    }).join(' ');
};