// Given a positive integer num, write a function which returns True if num is a perfect square else False.

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    for (let sum = 0, i = 1; sum < num; i += 2) {
        sum += i;
        if (sum == num) return true;
    }
    return false;
};