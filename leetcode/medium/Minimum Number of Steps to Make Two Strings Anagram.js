// Given two equal - size strings s and t.In one step you can choose any character of t and replace it with another character.
// Return the minimum number of steps to make t an anagram of s.
// An Anagram of a string is a string that contains the same characters with a different(or the same) ordering.

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    let len = s.length;
    let freq = {};
    for (let i = 0; i < len; i++) {
        freq[s[i]] = (s[i] in freq) ? freq[s[i]] + 1 : 1;
        freq[t[i]] = (t[i] in freq) ? freq[t[i]] - 1 : -1;
    }
    let ret = 0;
    Object.values(freq).forEach(function (el) {
        ret += Math.abs(el);
    });
    return (ret / 2);
};