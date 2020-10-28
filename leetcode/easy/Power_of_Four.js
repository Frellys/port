// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
    let pow = 0;
    while (true) {
        let temp = Math.pow(4, pow);
        if (temp == num) return true;
        if (temp > num) return false;
        if (temp < num) pow++;
    }
};