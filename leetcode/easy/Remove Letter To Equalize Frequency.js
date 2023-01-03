// You are given a 0-indexed string word, consisting of lowercase English letters.
// You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.
// Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.

/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
    let ret = false;
    word.split('').forEach((c, cdx, arr) => {
        if (!ret) {
            let seen = arr.reduce((acc, cur, index) => {
                if (index != cdx) {
                    if (!(cur in acc)) {
                        acc[cur] = 0;
                    }
                    acc[cur]++;
                }
                return acc;
            }, {});
            ret = (new Set(Object.values(seen)).size == 1);
        }
    });
    return ret;
};