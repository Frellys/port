// Given a string s and a character letter,
// return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
    return Math.floor(100 / s.length * s.split('').reduce((acc, cur) => {
        return acc += (cur === letter);
    }, 0));
};