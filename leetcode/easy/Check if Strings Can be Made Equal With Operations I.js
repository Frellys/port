// You are given two strings s1 and s2, both of length 4, consisting of lowercase English letters.
// You can apply the following operation on any of the two strings any number of times:
// - Choose any two indices i and j such that j - i = 2, then swap the two characters at those indices in the string.
// Return true if you can make the strings s1 and s2 equal, and false otherwise.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function (s1, s2) {
    return new Set(Array.from(arguments).map(s => {
        return s.split('').reduce((acc, cur, cdx) => {
            let pos = cdx % 2;
            acc[pos] = acc[pos].concat(cur).sort();
            return acc;
        }, [[], []]).map(arr => arr.join('')).join('');
    })).size == 1;
};