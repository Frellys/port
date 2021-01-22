// Given an m x n matrix, return true if the matrix is Toeplitz.Otherwise, return false.
// A matrix is Toeplitz if every diagonal from top - left to bottom - right has the same elements.

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    let flag = true;
    matrix.forEach(function (row, rdx) {
        if (flag && rdx > 0) {
            row.forEach(function (col, cdx) {
                if (cdx > 0) {
                    if (matrix[rdx - 1][cdx - 1] != col) flag = false;
                }
            });
        }
    });
    return flag;
};