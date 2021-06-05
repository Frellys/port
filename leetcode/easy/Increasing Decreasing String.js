// Given a string s.You should re - order the string using the following algorithm:
// - Pick the smallest character from s and append it to the result.
// - Pick the smallest character from s which is greater than the last appended character to the result and append it.
// - Repeat step 2 until you cannot pick more characters.
// - Pick the largest character from s and append it to the result.
// - Pick the largest character from s which is smaller than the last appended character to the result and append it.
// - Repeat step 5 until you cannot pick more characters.
// - Repeat the steps from 1 to 6 until you pick all characters from s.
// In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.
// Return the result string after sorting s with this algorithm.

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
    let ret = '';
    let chars = {};
    s.split('').forEach(function (ch) {
        if ((ch in chars) == false) {
            chars[ch] = 0;
        }
        chars[ch]++;
    });
    let keys = Object.keys(chars).sort();
    while (keys.some(key => chars[key])) {
        keys.filter(key => chars[key]).forEach(key => { ret += key; chars[key]--; });
        keys.filter(key => chars[key]).reverse().forEach(key => { ret += key; chars[key]--; });
    }
    return ret;
};