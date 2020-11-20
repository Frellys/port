// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
// Note:
// 1. The length of both num1 and num2 is < 5100.
// 2. Both num1 and num2 contains only digits 0 - 9.
// 3. Both num1 and num2 does not contain any leading zero.
// 4. You must not use any built -in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    if (num1.length > num2.length) {
        while (num1.length > num2.length) num2 = '0' + num2;
    }
    if (num2.length > num1.length) {
        while (num2.length > num1.length) num1 = '0' + num1;
    }
    let sup = 0;
    let ret = '';
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = num1.length - 1; i >= 0; i--) {
        let n1;
        let n2;
        numbers.forEach(function (number) {
            if (num1[i] == number.toString()) n1 = number;
            if (num2[i] == number.toString()) n2 = number;
        });
        let cur = n1 + n2 + sup;
        if (sup != 0) sup = 0;
        if (cur >= 10) {
            cur = cur - 10;
            sup = 1
        }
        ret = cur.toString() + ret;
    }
    if (sup != 0) ret = '1' + ret;
    return ret;
};