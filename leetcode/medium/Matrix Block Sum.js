// Given a m x n matrix mat and an integer k, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for:
// i - k <= r <= i + k,
// j - k <= c <= j + k, and
// (r, c) is a valid position in the matrix.

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
    let rows = mat.length - 1;
    let cols = mat[0].length - 1;
    return mat.map(function (row, rdx) {
        return row.map(function (col, cdx) {
            let sum = 0;
            let ra = Math.max(0, rdx - k);
            let rb = Math.min(rows, rdx + k);
            let ca = Math.max(0, cdx - k);
            let cb = Math.min(cols, cdx + k);
            for (let r = ra; r <= rb; r++) {
                for (let c = ca; c <= cb; c++) {
                    sum += mat[r][c];
                }
            }
            return sum;
        });
    });
};