// Given an array of integers A sorted in non - decreasing order, return an array of the squares of each number, also in sorted non - decreasing order.

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    A.sort(function (a, b) { return Math.abs(a) - Math.abs(b); });
    for (let i = 0; i < A.length; i++) A[i] = Math.pow(A[i], 2);
    return A;
};