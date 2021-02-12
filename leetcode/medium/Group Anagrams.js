// Given an array of strings strs, group the anagrams together.You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let anagrams = {};
    strs.forEach(function (s) {
        let key = s.split('').sort().join('');
        if (!anagrams.hasOwnProperty(key)) anagrams[key] = [];
        anagrams[key].push(s);
    });
    return Object.values(anagrams);
};