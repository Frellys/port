// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
// A divisor of an integer x is an integer that can divide x evenly.
// Given an integer n, return true if n is a perfect number, otherwise return false.

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    if (num == 1) return false;
    let cur = 1;
    let arr = [];
    while (cur <= num / 2) {
        if (num % cur == 0) arr.push(cur);
        cur++;
    }
    let sum = 0;
    arr.forEach(function (el) { sum += el; });
    return (sum == num) ? true : false;
};