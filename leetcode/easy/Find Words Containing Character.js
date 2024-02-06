// You are given a 0-indexed array of strings words and a character x.
// Return an array of indices representing the words that contain the character x.

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    return words.reduce((acc, cur, cdx) => {
        return (cur.includes(x)) ? acc.concat(cdx) : acc;
    }, []);
};