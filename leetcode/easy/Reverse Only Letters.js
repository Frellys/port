// Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
    let arr = [];
    for (let ch of S) {
        if (ch.match(/[a-z]/i)) arr.push(ch);
    }
    let retStr = '';
    for (let ch of S) {
        retStr += (ch.match(/[a-z]/i)) ? arr.pop() : ch;
    }
    return retStr;
};