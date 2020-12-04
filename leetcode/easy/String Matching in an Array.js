// Given an array of string words.
// Return all strings in words which is substring of another word in any order.
// String words[i] is substring of words[j], if can be obtained removing some characters to left and / or right side of words[j].

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    let ret = [];
    words.forEach(function (word) {
        if (!ret.includes(word)) {
            for (let i = 0; i < words.length; i++) {
                if (words[i] != word) {
                    if (words[i].indexOf(word) != -1) {
                        ret.push(word);
                        break;
                    }
                }
            }
        }
    });
    return ret;
};