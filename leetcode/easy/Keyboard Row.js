// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
// You may use one character in the keyboard more than once.
// You may assume the input string will only contain letters of alphabet.

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let kbd = [
        { cur: false, charset: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'] },
        { cur: false, charset: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'] },
        { cur: false, charset: ['z', 'x', 'c', 'v', 'b', 'n', 'm'] }
    ];
    let ret = [];
    words.forEach(function (word) {
        word.split('').forEach(function (char, idx) {
            let ch = char.toLowerCase();
            if (idx == 0) {
                kbd.forEach(function (row) {
                    if (row.charset.includes(ch)) row.cur = true;
                });
            }
            else {
                kbd.forEach(function (row) {
                    if (row.cur && !row.charset.includes(ch)) { row.cur = false; }
                });
            }
        });
        kbd.forEach(function (row) {
            if (row.cur) ret.push(word);
            row.cur = false;
        });
    });
    return ret;
};