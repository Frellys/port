// Given two strings s and t , write a function to determine if t is an anagram of s.
// You may assume the string contains only lowercase alphabets.
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    return new Set(Array.from(arguments).map(el => el.split('').sort().join(''))).size == 1;
};