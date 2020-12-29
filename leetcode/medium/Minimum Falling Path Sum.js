// Given a square array of integers A, we want the minimum sum of a falling path through A.
// A falling path starts at any element in the first row, and chooses one element from each row.
// The next row's choice must be in a column that is different from the previous row's column by at most one.

/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function (A) {
    let min = A[0][0];
    let len = A.length;
    if (len > 1) {
        let cl = 0;
        let cr = len - 1;
        for (let r = 1; r < len; r++) {
            for (let c = 1; c < cr; c++) {
                A[r][c] += Math.min(A[r - 1][c], A[r - 1][c - 1], A[r - 1][c + 1]);
            }
            A[r][cl] += Math.min(A[r - 1][cl], A[r - 1][cl + 1]);
            A[r][cr] += Math.min(A[r - 1][cr], A[r - 1][cr - 1]);
        }
        min = Math.min.apply(null, A.pop());
    }
    return min;
};