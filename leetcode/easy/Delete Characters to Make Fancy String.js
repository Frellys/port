// A fancy string is a string where no three consecutive characters are equal.
// Given a string s, delete the minimum possible number of characters from s to make it fancy.
// Return the final string after the deletion.
// It can be shown that the answer will always be unique.

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
    let ret = s[0];
    let last = {
        ch: s[0],
        seenOnce: true
    };
    for (let i = 1; i < s.length; i++) {
        let cur = s[i];
        if (cur == last.ch) {
            if (last.seenOnce) {
                ret += cur;
                last.seenOnce = false;
            }
        }
        else {
            ret += (last.ch = cur);
            last.seenOnce = true;
        }
    }
    return ret;
};