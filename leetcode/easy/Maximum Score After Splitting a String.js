// Given a string s of zeros and ones, return the maximum score after splitting the string into two non - empty substrings(i.e.left substring and right substring).
// The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let max = 0;
    for (let i = 1; i < s.length; i++) {
        let zrs = 0;
        let ons = 0;
        s.substring(0, i).split('').forEach(function (el) {
            if (el == '0') zrs++;
        });
        s.substring(i).split('').forEach(function (el) {
            if (el == '1') ons++;
        });
        temp = zrs + ons;
        if (max < temp) max = temp;
    }
    return max;
};