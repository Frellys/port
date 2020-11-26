// Given a string, find the first non - repeating character in it and return its index.If it doesn't exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let ret = -1;
    s.split('').forEach(function (ch, idx) {
        if (ret == -1) {
            let cnt = 0;
            for (let i = 0; i < s.length; i++) {
                if (ch == s[i]) cnt++;
                if (cnt > 1) break;
            }
            if (cnt == 1) ret = idx;
        }
    });
    return ret;
};