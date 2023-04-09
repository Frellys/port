// You are given a positive integer n. Each digit of n has a sign according to the following rules:
// - The most significant digit is assigned a positive sign.
// - Each other digit has an opposite sign to its adjacent digits.
// Return the sum of all digits with their corresponding sign.

/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
    return n.toString().split('').reduce((acc, cur, cdx) => {
        if (cdx % 2) {
            cur = '-' + cur;
        }
        return +cur + acc;
    }, 0);
};