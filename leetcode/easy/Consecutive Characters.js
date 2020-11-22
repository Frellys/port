// Given a string s, the power of the string is the maximum length of a non - empty substring that contains only one unique character.
// Return the power of the string.

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    if (s.length == 0) return 0;
    let max = 1;
    let cnt = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] == s[i - 1]) {
            cnt++;
        }
        else {
            cnt = 1;
        }
        if (max < cnt) {
            max = cnt;
        }
    }
    return max;
};