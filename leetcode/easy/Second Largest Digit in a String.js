// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or - 1 if it does not exist.
// An alphanumeric string is a string consisting of lowercase English letters and digits.

/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    let nums = [];
    s.split('').forEach(function (ch) {
        let num = parseInt(ch);
        if (isNaN(num) == false && !nums.includes(num)) {
            nums.push(num);
        }
    });
    nums.sort(function (a, b) { return b - a; });
    return (nums.length > 1) ? nums[1] : -1;
};