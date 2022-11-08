// You are given an array of strings words. Each element of words consists of two lowercase English letters.
// Create the longest possible palindrome by selecting some elements from words and concatenating them in any order.
// Each element can be selected at most once.
// Return the length of the longest palindrome that you can create.
// If it is impossible to create any palindrome, return 0.
// A palindrome is a string that reads the same forward and backward.

/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
    let seen = words.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    let ret = Object.keys(seen).reduce((acc, key) => {
        if (seen[key]) {
            let rev = key.split('').reverse().join('');
            if (rev == key) {
                acc += (Math.floor(seen[key] / 2) * 4);
                seen[key] %= 2;
            }
            else {
                if (seen[rev]) {
                    let min = Math.min(seen[key], seen[rev]);
                    seen[key] -= min;
                    seen[rev] -= min;
                    acc += (min * 4);
                }
            }
        }
        return acc;
    }, 0);
    ret += (Object.entries(seen).some(([key, val]) => (val && key[0] == key[1])) * 2);
    return ret;
};