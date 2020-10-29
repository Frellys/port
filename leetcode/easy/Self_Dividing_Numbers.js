// A self - dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self - dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// Also, a self - dividing number is not allowed to contain the digit zero.
// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let ret = [];
    for (let num = left; num <= right; num++) {
        let flag = true;
        num.toString().split('').forEach(function (n) {
            if (flag) {
                if (n == '0') {
                    flag = false;
                }
                else {
                    if (num % parseInt(n) != 0) flag = false;
                }
            }
        });
        if (flag) ret.push(num);
    }
    return ret;
};