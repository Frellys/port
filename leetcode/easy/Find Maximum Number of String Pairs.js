// You are given a 0-indexed array words consisting of distinct strings.
// The string words[i] can be paired with the string words[j] if:
// - The string words[i] is equal to the reversed string of words[j].
// - 0 <= i < j < words.length.
// Return the maximum number of pairs that can be formed from the array words.
// Note that each string can belong in at most one pair.

/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
    let seen = words.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    return Object.keys(seen).reduce((acc, cur) => {
        if (seen[cur]) {
            let rev = cur.split('').reverse().join('');
            if (seen[rev]) {
                let p = Math.floor(Math.min(seen[cur], seen[rev]) / (1 + (cur == rev)));
                seen[rev] = 0;
                acc += p;
            }
        }
        return acc;
    }, 0);
};