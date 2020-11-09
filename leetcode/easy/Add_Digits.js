// Given a non - negative integer num, repeatedly add all its digits until the result has only one digit.

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (true) {
        let res = 0;
        num.toString().split('').forEach(function (el) {
            res += parseInt(el);
        });
        if (res.toString().length == 1) {
            return res;
        }
        else {
            num = res;
        }
    }
};