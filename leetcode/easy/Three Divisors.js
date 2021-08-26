// Given an integer n, return true if n has exactly three positive divisors.
// Otherwise, return false.
// An integer m is a divisor of n if there exists an integer k such that n = k * m.

/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
    let divisors = new Set([1, n]);
    let cap = Math.ceil(Math.sqrt(n));
    for (let i = 2; i <= cap; i++) {
        if (!(n % i)) {
            divisors.add(i);
            let opp = n / i;
            if (!(n % opp)) {
                divisors.add(opp);
                break;
            }
        }
    }
    return divisors.size == 3;
};