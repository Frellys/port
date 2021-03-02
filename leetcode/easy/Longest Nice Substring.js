// A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase.
// For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear.
// However, "abA" is not because 'b' appears, but 'B' does not.
// Given a string s, return the longest substring of s that is nice.
// If there are multiple, return the substring of the earliest occurrence.
// If there are none, return an empty string.

/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
    let ret = '';
    s.split('').forEach(function (c, cdx, arr) {
        let cur = [];
        for (let i = cdx; i < arr.length; i++) {
            cur.push(s[i]);
            if (cur.every((el) => { return cur.includes(el.toLowerCase()) && cur.includes(el.toUpperCase()); })) {
                if (ret.length < cur.length) ret = cur.join('');
            }
        }
    });
    return ret;
};