// Given alphanumeric string s.
// (Alphanumeric string is a string consisting of lowercase English letters and digits).
// You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit.
// That is, no two adjacent characters have the same type.
// Return the reformatted string or return an empty string if it is impossible to reformat the string.

/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
    let ret = '';
    let numbers = '0123456789';
    let cnt = {
        nums: [],
        chars: []
    };
    for (let el of s) {
        cnt[numbers.includes(el) ? 'nums' : 'chars'].push(el)
    }
    let diff = cnt.chars.length - cnt.nums.length;
    if (Math.abs(diff) == 1 || !diff) {
        switch (diff) {
            case -1: { cnt.chars.unshift(''); break; }
            case 1: { cnt.nums.push(''); break; }
            default: { break; }
        }
        cnt.chars.forEach(function (el, idx) {
            ret += el + cnt.nums[idx];
        });
    }
    return ret;
};