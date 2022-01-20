// A sentence consists of lowercase letters('a' to 'z'), digits('0' to '9'), hyphens('-'), punctuation marks('!', '.', and ','), and spaces(' ') only.
// Each sentence can be broken down into one or more tokens separated by one or more spaces ' '.
// A token is a valid word if all three of the following are true:
// - It only contains lowercase letters, hyphens, and / or punctuation (no digits).
// - There is at most one hyphen '-'. If present, it must be surrounded by lowercase characters("a-b" is valid, but "-ab" and "ab-" are not valid).
// - There is at most one punctuation mark. If present, it must be at the end of the token("ab,", "cd!", and "." are valid, but "a!b" and "c.," are not valid).
// Examples of valid words include "a-b.", "afad", "ba-c", "a!", and "!".
// Given a string sentence, return the number of valid words in sentence.

/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
    let ret = 0;
    let alphabet = new Set('abcdefghijklmnopqrstuvwxyz'.split(''));
    let digits = new Set('0123456789'.split(''));
    let pMarks = new Set('!.,'.split(''));
    let hyp = '-';
    sentence.split(' ').filter(Boolean).forEach(function (w) {
        let arr = w.split('');
        let flag = !arr.some(c => digits.has(c));
        if (flag) {
            let hdx = arr.indexOf(hyp);
            if (hdx > - 1) {
                if (arr[0] == hyp || arr[arr.length - 1] == hyp || hdx != arr.lastIndexOf(hyp) || !alphabet.has(arr[hdx - 1]) || !alphabet.has(arr[hdx + 1])) {
                    flag = false;
                }
            }
        }
        if (flag) {
            for (let i = 0; i < arr.length - 1; i++) {
                if (pMarks.has(arr[i])) {
                    flag = false;
                }
            }
        }
        if (flag) {
            ret++;
        }
    });
    return ret;
};