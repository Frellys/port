// Given an array of strings words and a character separator, split each string in words by separator.
// Return an array of strings containing the new strings formed after the splits, excluding empty strings.

/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
    return words.reduce((acc, cur) => {
        return acc.concat(cur.split(separator).filter(Boolean));
    }, []);
};