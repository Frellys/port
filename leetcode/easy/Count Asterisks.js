// You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair.
// In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.
// Return the number of '*' in s, excluding the '*' between each pair of '|'.

/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
    return s.split('|').reduce((acc, cur, cdx) => {
        if (!(cdx % 2)) {
            for (let c of cur) {
                acc += (c === '*');
            }
        }
        return acc;
    }, 0);
};