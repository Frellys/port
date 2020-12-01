// Given an integer n, write a function to determine if it is a power of two.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    let pow = 0;
    while (true) {
        let temp = Math.pow(2, pow);
        if (temp == n) return true;
        if (temp > n) return false;
        if (temp < n) pow++;
    }
};