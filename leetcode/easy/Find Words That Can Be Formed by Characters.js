// You are given an array of strings words and a string chars.
// A string is good if it can be formed by characters from chars(each character can only be used once).
// Return the sum of lengths of all good strings in words.

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let ret = 0;
    words.forEach(function (word) {
        let tmp = chars.split('');
        let flag = true;
        for (let i = 0; i < word.length; i++) {
            let ch = word[i];
            if (tmp.includes(ch)) {
                tmp.splice(tmp.indexOf(ch), 1);
            }
            else {
                flag = false;
                break;
            }
        }
        if (flag) ret += word.length;
    });
    return ret;
};