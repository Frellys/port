// Given a non - empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
// You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let sep = '';
    if (s.length < 2) return false;
    for (let i = 0; i < s.length / 2; i++) {
        sep += s[i].toString();
        //let temp = s.split('');
        let flag = true;
        s.split(sep).forEach(function (el) {
            if (el != '') flag = false;
        });
        if (flag) return sep;
    }
    return false;
};