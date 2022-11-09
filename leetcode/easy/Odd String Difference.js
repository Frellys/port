// You are given an array of equal-length strings words. Assume that the length of each string is n.
// Each string words[i] can be converted into a difference integer array difference[i] of length n - 1
// where difference[i][j] = words[i][j+1] - words[i][j] where 0 <= j <= n - 2.
// Note that the difference between two letters is the difference between their positions in the alphabet
// i.e. the position of 'a' is 0, 'b' is 1, and 'z' is 25.
// For example, for the string "acb", the difference integer array is [2 - 0, 1 - 2] = [2, -1].
// All the strings in words have the same difference integer array, except one.
// You should find that string.
// Return the string in words that has different difference integer array.

/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
    let cMap = new Array(26).fill(false).reduce((acc, cur, cdx) => {
        acc[String.fromCharCode(97 + cdx)] = cdx;
        return acc;
    }, {});
    let seen = words.reduce((s, word) => {
        let diff = word.split('').map(c => cMap[c]).reduce((acc, cur, cdx, arr) => {
            if (cdx) {
                acc.push(cur - arr[cdx - 1]);
            }
            return acc;
        }, []).join(',');
        if (!(diff in s)) {
            s[diff] = [];
        }
        s[diff].push(word);
        return s;
    }, {});
    return Object.values(seen).find(arr => arr.length == 1).pop();
};