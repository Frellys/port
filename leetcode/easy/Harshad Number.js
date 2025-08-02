// An integer divisible by the sum of its digits is said to be a Harshad number.
// You are given an integer x.
// Return the sum of the digits of x if x is a Harshad number, otherwise, return -1.

/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
    let sum = x.toString().split('').map(Number).reduce((acc, cur) => acc + cur, 0);
    return (x % sum) ? -1 : sum;
};