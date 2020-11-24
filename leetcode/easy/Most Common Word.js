// Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.
// It is guaranteed there is at least one word that isn't banned, and that the answer is unique.
// Words in the list of banned words are given in lowercase, and free of punctuation.
// Words in the paragraph are not case sensitive.
// The answer is in lowercase.

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    let freq = {};
    paragraph.split(/[,\s]+/).forEach(function (el) {
        let word = el.toLowerCase().replace(/[^a-z]+/g, '');
        if (!banned.includes(word)) {
            if (word in freq) {
                freq[word]++;
            }
            else {
                freq[word] = 1;
            }
        }
    });
    let max = 0;
    let ret;
    Object.keys(freq).forEach(function (key) {
        if (max < freq[key]) {
            max = freq[key];
            ret = key;
        }
    });
    return ret;
};