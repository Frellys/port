// A value - equal string is a string where all characters are equal.
// - For example, "1111" and "33" are value - equal strings.
// - In contrast, "123" is not a value - equal string.
// Given a numeric string s, decompose the string into some consecutive value - equal substrings
// where all substrings except for exactly one has a size of three and the wild substring has a size of two.
// Return true if you can decompose s according to the above rules otherwise, return false.
// A substring is a contiguous sequence of characters in a string.

/**
 * @param {string} s
 * @return {boolean}
 */
var isDecomposable = function (s) {
    function checkSequence() {
        let rem = cnt % 3;
        if (rem == 2) {
            if (wild) {
                flag = false;
            }
            else {
                wild = true;
            }
        }
        else {
            if (rem != 0) {
                flag = false;
            }
        }
    }
    let cur = s[0];
    let cnt = 1;
    let wild = false;
    let flag = true;
    for (let i = 1; flag && i < s.length; i++) {
        if (s[i] == cur) {
            cnt++;
        }
        else {
            checkSequence();
            cur = s[i];
            cnt = 1;
        }
    }
    checkSequence();
    return flag && wild;
};