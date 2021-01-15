// Given a string s containing only lower case English letters and the '?' character, convert all the '?' characters into lower case letters
// such that the final string does not contain any consecutive repeating characters.
// You cannot modify the non '?' characters.
// It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.
// Return the final string after all the conversions(possibly zero) have been made.
// If there is more than one solution, return any of them.
// It can be shown that an answer is always possible with the given constraints.

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let ret = [];
    let arr = s.split('');
    arr.forEach(function (ch, i) {
        if (ch == '?') {
            if (i == 0) {
                for (let char of alphabet) {
                    if (char != s[1]) {
                        ret.push(char);
                        break;
                    }
                }
            }
            else {
                for (let char of alphabet) {
                    if (char != s[i + 1] && char != ret[i - 1]) {
                        ret.push(char);
                        break;
                    }
                }
            }
        }
        else {
            ret.push(ch);
        }
    });
    return ret.join('');
};