// You are given an array of strings words (0 - indexed).
// In one operation, pick two distinct indices i and j, where words[i] is a non - empty string, and move any character from words[i] to any position in words[j].
// Return true if you can make every string in words equal using any number of operations, and false otherwise.

/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
    let bdr = words.length;
    let cnt = new Map(Array.from(new Array(26), (el, edx) => [String.fromCharCode(edx + 97), 0]));
    words.forEach(function (word) {
        for (let ch of word) {
            cnt.set(ch, (cnt.get(ch) + 1) % bdr);
        }
    });
    return Array.from(cnt.values()).every(el => el == 0);
};