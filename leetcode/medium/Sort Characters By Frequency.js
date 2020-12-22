// Given a string, sort it in decreasing order based on the frequency of characters.

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let freq = {};
    for (let key of s) {
        freq[key] = (key in freq) ? freq[key] + 1 : 1;
    }
    let keys = Object.keys(freq).sort(function (a, b) { return freq[b] - freq[a]; });
    return keys.map(function (key) { return (new Array(freq[key]).fill(key).join('')); }).join('');
};