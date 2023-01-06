// Given an integer num, return the number of digits in num that divide num.
// An integer val divides nums if nums % val == 0.

/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
    return num.toString().split('').filter(n => !(num % n)).length;
};