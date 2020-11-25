// Given a word, you need to judge whether the usage of capitals in it is right or not.
// We define the usage of capitals in a word to be right when one of the following cases holds:
// - All letters in this word are capitals, like "USA".
// - All letters in this word are not capitals, like "leetcode".
// - Only the first letter in this word is capital, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let all_Upper;
    let all_Lower;
    let only_First;
    word.split('').forEach(function (ch, idx) {
        if (idx == 0) {
            if (ch == ch.toUpperCase()) all_Upper = true;
            if (ch == ch.toLowerCase()) all_Lower = true;
            if (ch == ch.toUpperCase()) only_First = true;
        }
        else {
            if (ch == ch.toUpperCase()) {
                if (all_Lower) all_Lower = false
                if (only_First) only_First = false;
            }
            else {
                if (all_Upper) all_Upper = false;
            }
        }
    });
    if (all_Upper || all_Lower || only_First) {
        return true;
    }
    else {
        return false;
    }
};