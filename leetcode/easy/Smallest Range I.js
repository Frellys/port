// Given an array A of integers, for each integer A[i] we may choose any x with -K <= x <= K, and add x to A[i].
// After this process, we have some array B.
// Return the smallest possible difference between the maximum value of B and the minimum value of B.

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function (A, K) {
    let max = Math.max.apply(null, A);
    let min = Math.min.apply(null, A);
    let diff = 0;
    if (max != min && 2 * K < max - min) {
        diff = (max - K) - (min + K);
    }
    return diff;
};