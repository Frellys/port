// You are given a string s, which contains stars *.
// In one operation, you can:
// - Choose a star in s.
// - Remove the closest non-star character to its left, as well as remove the star itself.
// Return the string after all stars have been removed.

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    let ret = '';
    let cnt = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '*') {
            cnt++;
        }
        else {
            if (!cnt) {
                ret = s[i] + ret;
            }
            else {
                cnt--;
            }
        }
    }
    return ret;
};