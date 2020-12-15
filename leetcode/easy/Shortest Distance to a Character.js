// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
    let ret = [];
    let charPos = [];
    let dist = 1;
    let left = 0;
    S.split('').forEach(function (ch, cdx) {
        if (ch == C) {
            ret.push(0);
            charPos.push(cdx);
        }
        else {
            ret.push(true);
            left++;
        }
    });
    while (left > 0) {
        charPos.forEach(function (el) {
            if (ret[el - dist] === true) {
                ret[el - dist] = dist;
                left--;
            }
            if (ret[el + dist] === true) {
                ret[el + dist] = dist;
                left--;
            }
        });
        dist++;
    };
    return ret;
};