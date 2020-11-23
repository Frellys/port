// Given a sentence that consists of some words separated by a single space, and a searchWord.
// You have to check if searchWord is a prefix of any word in sentence.
// Return the index of the word in sentence where searchWord is a prefix of this word(1 - indexed).
// If searchWord is a prefix of more than one word, return the index of the first word(minimum index).
// If there is no such word return -1.
// A prefix of a string S is any leading contiguous substring of S.

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    let words = sentence.split(' ');
    let ret = -1;
    for (let i = 0; i < words.length; i++) {
        if (words[i].indexOf(searchWord) == 0) {
            ret = i + 1;
            break;
        }
    }
    return ret;
};