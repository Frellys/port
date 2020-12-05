// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let freq = {};
    for (let i = 0; i < s.length; i++) {
        freq[s[i]] = (s[i] in freq) ? freq[s[i]] + 1 : 1;
    }
    let ret = 0;
    let trail = false;
    Object.keys(freq).forEach(function (key) {
        while (freq[key] > 1) {
            freq[key] -= 2;
            ret += 2;
        }
        if (freq[key] == 1) trail = true;
    });
    if (trail) ret++;
    return ret;
};