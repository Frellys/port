// You are given a 0 - indexed string array words, where words[i] consists of lowercase English letters.
// In one operation, select any index i such that 0 < i < words.length and words[i - 1] and words[i] are anagrams,
// and delete words[i] from words.
// Keep performing this operation as long as you can select an index that satisfies the conditions.
// Return words after performing all operations.
// It can be shown that selecting the indices for each operation in any arbitrary order will lead to the same result.

/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
    let getSorted = (s) => {
        return s.split('').sort().join('');
    };
    return words.reduce((acc, cur) => {
        let last = getSorted(acc[acc.length - 1]);
        let sCur = getSorted(cur);
        if (last != sCur) {
            acc.push(cur);
        }
        return acc;
    }, [words[0]]);
};