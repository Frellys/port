// A substring is a contiguous(non - empty) sequence of characters within a string.
// A vowel substring is a substring that only consists of vowels('a', 'e', 'i', 'o', and 'u') and has all five vowels present in it.
// Given a string word, return the number of vowel substrings in word.

/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function (word) {
    let ret = 0;
    word.split('').forEach(function (c, cdx, arr) {
        let vowels = Object.fromEntries('aeiou'.split('').map(v => [v, false]));
        while (Object.keys(vowels).includes(arr[cdx])) {
            vowels[arr[cdx]] = true;
            if (Object.values(vowels).every(v => v)) {
                ret++;
            }
            cdx++;
        }
    });
    return ret;
};