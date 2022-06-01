// The k - beauty of an integer num is defined as the number of substrings of num
// when it is read as a string that meet the following conditions:
// - It has a length of k.
// - It is a divisor of num.
// Given integers num and k, return the k - beauty of num.

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
    let ret = 0;
    let str = num.toString();
    for (let i = 0; i <= str.length - k; i++) {
        let cur = '';
        for (let j = i; j < i + k; j++) {
            cur += str[j];
        }
        let curNum = +cur;
        if (curNum) {
            ret += !(num % curNum);
        }
    }
    return ret;
};