// You are given a string num consisting of only digits.
// A string of digits is called balanced if the sum of the digits at even indices is equal to the sum of digits at odd indices.
// Return true if num is balanced, otherwise return false.

/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
    return new Set(num.split('').reduce((acc, cur, cdx) => {
        acc[cdx % 2] += +cur;
        return acc;
    }, [0, 0])).size == 1;
};