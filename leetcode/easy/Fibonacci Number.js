// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    let fb = [];
    fb.push(0);
    fb.push(1);
    while (fb.length <= N) {
        fb.push(fb[fb.length - 1] + fb[fb.length - 2]);
    }
    return fb[N];
};