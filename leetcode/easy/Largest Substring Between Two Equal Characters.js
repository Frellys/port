// Given a string s, return the length of the longest substring between two equal characters, excluding the two characters.
// If there is no such substring return -1.
// A substring is a contiguous sequence of characters within a string.

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    let seen = [];
    let ret = -1;
    for (let i = 0; i < s.length - 1; i++) {
        if (!seen.includes(s[i])) {
            seen.push(s[i]);
            let cur = s.lastIndexOf(s[i]) - s.indexOf(s[i]) - 1;
            if (ret < cur) ret = cur;
        }
    }
    return ret;
};