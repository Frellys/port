// The Tribonacci sequence Tn is defined as follows:
// T0 = 0, T1 = 1, T2 = 1, and Tn + 3 = Tn + Tn + 1 + Tn + 2 for n >= 0.
// Given n, return the value of Tn.

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    let tb = [];
    tb.push(0);
    tb.push(1);
    tb.push(1);
    while (tb.length <= n) {
        tb.push(tb[tb.length - 1] + tb[tb.length - 2] + tb[tb.length - 3]);
    }
    return tb[n];
};