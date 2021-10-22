// Given a string, sort it in decreasing order based on the frequency of characters.

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let freq = Object.fromEntries(Array.from(new Set(s.split(''))).map(c => [c, 0]));
    for (let key of s) {
        freq[key]++;
    }
    let keys = Object.keys(freq).sort(function (a, b) { return freq[b] - freq[a]; });
    return keys.map(key => new Array(freq[key]).fill(key).join('')).join('');
};