// Given an integer, write a function to determine if it is a power of three.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    let pow = 0;
    while (true) {
        let temp = Math.pow(3, pow);
        if (temp == n) return true;
        if (temp > n) return false;
        if (temp < n) pow++;
    }
};