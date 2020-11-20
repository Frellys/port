// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let numStr = n.toString();
    let prod = parseInt(numStr[0]);
    let sum = parseInt(numStr[0]);
    numStr.split('').forEach(function (num, ndx) {
        if (ndx != 0) {
            prod *= parseInt(num);
            sum += parseInt(num);
        }
    });
    return (prod - sum);
};