// Given two n x n binary matrices mat and target,
// return true if it is possible to make mat equal to target by rotating mat in 90 - degree increments,
// or false otherwise.

/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
    let n = mat.length;
    let cap = n - 1;
    let arr = Array.from(new Array(3), () => Array.from(new Array(n), () => new Array(n)))
    mat.forEach(function (row, rdx) {
        row.forEach(function (col, cdx) {
            arr[0][rdx][cdx] = mat[cdx][cap - rdx];
            arr[1][rdx][cdx] = mat[cap - rdx][cap - cdx];
            arr[2][rdx][cdx] = mat[cap - cdx][rdx];
        });
    });
    return arr.concat([mat]).some(a => target.every((row, rdx) => row.every((col, cdx) => a[rdx][cdx] == col)));
};