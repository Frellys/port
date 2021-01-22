// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order.
// The order of the alphabet is some permutation of lowercase letters.
// Given a sequence of words written in the alien language, and the order of the alphabet,
// return true if and only if the given words are sorted lexicographicaly in this alien language.

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    let flag = true;
    let len = words.length - 1;
    if (len > 0) {
        outer: for (let i = 0; i < len; i++) {
            let a = words[i];
            let b = words[i + 1];
            for (let cdx = 0; cdx < a.length; cdx++) {
                let adx = order.indexOf(a[cdx]);
                let bdx = order.indexOf(b[cdx])
                if (adx < bdx) break;
                if (adx > bdx) {
                    flag = false;
                    break outer;
                }
            }
        }
    }
    return flag;
};