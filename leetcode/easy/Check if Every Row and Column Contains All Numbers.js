// An n x n matrix is valid if every row and every column contains all the integers from 1 to n(inclusive).
// Given an n x n integer matrix matrix, return true if the matrix is valid.Otherwise, return false.

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
    let flag = true;
    let n = matrix.length;
    for (let i = 0; flag && (i < n); i++) {
        let row = new Set();
        let col = new Set();
        for (let j = 0; flag && (j < n); j++) {
            row.add(matrix[i][j]);
            col.add(matrix[j][i]);
        }
        flag = (row.size == n) && (col.size == n);
    }
    return flag;
};