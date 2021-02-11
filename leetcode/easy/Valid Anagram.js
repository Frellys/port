// Given two strings s and t , write a function to determine if t is an anagram of s.
// You may assume the string contains only lowercase alphabets.
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;
    let s1 = s.split('').sort().join('');
    let s2 = t.split('').sort().join('');
    return s1 == s2;
};