// Given a non - empty list of words, return the k most frequent elements.
// Your answer should be sorted by frequency from highest to lowest.
// If two words have the same frequency, then the word with the lower alphabetical order comes first.

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    let freq = {};
    words.forEach(function (word) {
        freq[word] = (word in freq) ? freq[word] + 1 : 1;
    });
    let max = Math.max.apply(null, Object.values(freq));
    let ret = [];
    while (ret.length < k) {
        ret = ret.concat(Object.keys(freq).filter(function (key) { return freq[key] == max; }).sort());
        max--;
    }
    while (ret.length > k) ret.pop();
    return ret;
};