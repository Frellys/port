// Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let req = {};
    ransomNote.split('').forEach(function (ch) {
        if ((ch in req) == false) {
            req[ch] = 0;
        }
        req[ch]++;
    });
    let avail = {};
    magazine.split('').forEach(function (ch) {
        if ((ch in avail) == false) {
            avail[ch] = 0;
        }
        avail[ch]++;
    });
    return Object.keys(req).every(function (key) { return avail[key] >= req[key]; });
};