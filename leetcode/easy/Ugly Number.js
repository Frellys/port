// Write a program to check whether a given number is an ugly number.
// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
    if (num == 0) return false;
    if (num == 1) return true;
    let cur = num;
    let flag = true;
    while (flag) {
        if (cur == 2 || cur == 3 || cur == 5) {
            break;
        }
        if (cur % 5 == 0) {
            cur = cur / 5;
            continue;
        }
        if (cur % 3 == 0) {
            cur = cur / 3;
            continue;
        }
        if (cur % 2 == 0) {
            cur = cur / 2;
            continue;
        }
        flag = false;
    }
    return flag;
};