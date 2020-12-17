// Given four lists A, B, C, D of integer values, compute how many tuples(i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.
// To make problem a bit easier, all A, B, C, D have same length of N where 0 <= N <= 500.
// All integers are in the range of - 2 ^ 28 to 2 ^ 28 - 1 and the result is guaranteed to be at most 2 ^ 31 - 1.

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
    let seen = new Map();
    let cnt = 0;
    for (let a of A) {
        for (let b of B) {
            b += a;
            seen.set(b, seen.has(b) ? seen.get(b) + 1 : 1);
        }
    }
    for (let c of C) {
        for (let d of D) {
            d += c;
            cnt += seen.has(-d) ? seen.get(-d) : 0;
        }
    }
    return cnt;
};