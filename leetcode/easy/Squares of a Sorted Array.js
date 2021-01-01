// Given an array of integers A sorted in non - decreasing order, return an array of the squares of each number, also in sorted non - decreasing order.

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    return A.sort(function (a, b) { return Math.abs(a) - Math.abs(b); }).map(function (n) { return Math.pow(n, 2); });
};