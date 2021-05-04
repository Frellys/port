// You are given a 0 - indexed string s that has lowercase English letters in its even indices and digits in its odd indices.
// There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.
// - For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// For every odd index i, you want to replace the digit s[i] with shift(s[i - 1], s[i]).
// Return s after replacing all digits.It is guaranteed that shift(s[i - 1], s[i]) will never exceed 'z'.

/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let ret = '';
    for (let i = 1; i < s.length; i += 2) {
        let dl = parseInt(s[i]);
        let ch = s[i - 1];
        ret += ch + alphabet[alphabet.indexOf(ch) + dl];
    }
    if (ret.length < s.length) {
        ret += s[s.length - 1];
    }
    return ret;
};