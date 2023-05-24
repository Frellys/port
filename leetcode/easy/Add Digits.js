// Given a non - negative integer num, repeatedly add all its digits until the result has only one digit.

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    let ret = num.toString();
    while (ret.length > 1) {
        ret = ret.split('').reduce((acc, cur) => acc + parseInt(cur), 0).toString();
    }
    return ret;
};