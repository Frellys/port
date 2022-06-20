// Given a string of English letters s,
// return the greatest English letter which occurs as both a lowercase and uppercase letter in s.
// The returned letter should be in uppercase.
// If no such letter exists, return an empty string.
// An English letter b is greater than another letter a if b appears after a in the English alphabet.

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
    const seen = Array.from(new Set(s.split(''))).reduce((acc, cur) => {
        const c = cur.toUpperCase();
        if (!(c in acc)) {
            acc[c] = [false, false];
        }
        acc[c][+(c === cur)] = true;
        return acc;
    }, {});
    return Object.keys(seen).filter(k => seen[k].every(v => v)).sort().pop() || '';
};