// Write an algorithm to determine if a number n is "happy".
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1(where it will stay),
// or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers.
// Return True if n is a happy number, and False if not.

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let seen = [];
    while (true) {
        let cur = n.toString().split('');
        let res = 0;
        cur.forEach(function (el) {
            res += Math.pow(parseInt(el), 2);
        });
        if (seen.includes(res)) {
            return false;
        }
        else {
            if (res == 1) return true;
            seen.push(res);
            n = res;
        }
    }
    return true;
};