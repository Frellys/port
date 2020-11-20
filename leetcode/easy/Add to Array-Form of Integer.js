// For a non - negative integer X, the array - form of X is an array of its digits in left to right order.
// For example, if X = 1231, then the array form is[1, 2, 3, 1].
// Given the array - form A of a non - negative integer X, return the array - form of the integer X + K.

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
    let B = K.toString().split('');
    if (A.length > B.length) { while (A.length != B.length) B.unshift(0); }
    if (B.length > A.length) { while (A.length != B.length) A.unshift(0); }
    for (let i = 0; i < B.length; i++) { B[i] = parseInt(B[i]); }
    let ret = [];
    let sup = 0;
    for (let i = A.length - 1; i >= 0; i--) {
        let cur = A[i] + B[i] + sup;
        sup = 0;
        if (cur >= 10) {
            cur = cur - 10;
            sup = 1;
        }
        ret.push(cur);
    }
    if (sup != 0) ret.push(1);
    return ret.reverse();
};