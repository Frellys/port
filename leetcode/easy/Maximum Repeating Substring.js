// For a string sequence, a string word is k - repeating if word concatenated k times is a substring of sequence.
// The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence.
// If word is not a substring of sequence, word's maximum k - repeating value is 0.
// Given strings sequence and word, return the maximum k - repeating value of word in sequence.

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
    if (!sequence.includes(word)) return 0;
    let ret = 0;
    let sub = word;
    while (sequence.includes(sub)) {
        sub += word;
        ret++;
    }
    return ret;
};