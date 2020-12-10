// Given an array A of integers, we must modify the array in the following way:
// we choose an i and replace A[i] with -A[i], and we repeat this process K times in total.
// (We may choose the same index i multiple times.)
// Return the largest possible sum of the array after modifying it in this way.

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function (A, K) {
    if (K != 0) {
        let bz = A.filter(function (n) { return n < 0; }).sort(function (a, b) { return b - a; });
        while (K && bz.length) {
            let idx = A.indexOf(bz.pop());
            A[idx] = Math.abs(A[idx]);
            K--;
        }
        if (K && (K & 2 != 0) && !A.includes(0)) {
            let min = Math.min.apply(null, A);
            let idx = A.indexOf(min);
            A[idx] = -A[idx];
        }
    }
    return A.reduce(function (a, b) { return a + b; });
};