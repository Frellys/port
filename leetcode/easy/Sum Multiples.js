// Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.
// Return an integer denoting the sum of all numbers in the given range satisfying the constraint.

/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
    let ret = 0;
    let divisors = [3, 5, 7];
    for (let i = 0; i <= n; i++) {
        ret += (divisors.some(d => !(i % d)) ? i : 0);
    }
    return ret;
};