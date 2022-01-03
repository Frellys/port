// Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string.
// Otherwise, return false.

/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
    const bdx = s.indexOf('b');
    return bdx < 0 || bdx > s.lastIndexOf('a');
};