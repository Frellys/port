// Given a string, sort it in decreasing order based on the frequency of characters.

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let freq = s.split('').reduce((acc, cur) => {
        if (!(cur in acc)) {
            acc[cur] = 0;
        }
        acc[cur]++;
        return acc;
    }, {});
    let keys = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
    return keys.map(key => new Array(freq[key]).fill(key).join('')).join('');
};