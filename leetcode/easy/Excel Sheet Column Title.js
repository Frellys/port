// Given a positive integer, return its corresponding column title as appear in an Excel sheet.

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    let ret = '';
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    while (n) {
        n--;
        let cur = n % 26;
        n = (n - cur) / 26;
        ret = alphabet[cur] + ret;
    }
    return ret;
};