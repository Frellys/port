// You are given a string num representing a large integer.
// An integer is good if it meets the following conditions:
// - It is a substring of num with length 3.
// - It consists of only one unique digit.
// Return the maximum good integer as a string or an empty string "" if no such integer exists.

/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    let ret = '';
    for (let i = 0; i < 10; i++) {
        let cur = '' + i + i + i;
        if (num.includes(cur)) {
            ret = cur;
        }
    }
    return ret;
};