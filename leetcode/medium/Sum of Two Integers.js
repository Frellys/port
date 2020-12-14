// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    let ret = a;
    while (b) {
        let tmp = ret & b;
        ret = ret ^ b;
        b = tmp << 1;
    }
    return ret;
};