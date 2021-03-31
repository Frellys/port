// A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom - right direction until reaching the matrix's end.
// For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], and mat[4][2].
// Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
    let rows = mat.length;
    let cols = mat[0].length;
    let ret = new Array(rows).fill().map(() => { return new Array(cols).fill(0); });
    function getArr(rdx, cdx) {
        let arr = [];
        while (rdx < rows && cdx < cols) {
            arr.push(mat[rdx][cdx]);
            rdx++;
            cdx++;
        }
        return arr.join(',').split(',').map(function (el) { return parseInt(el); });
    }
    function setArr(rdx, cdx, arr) {
        while (arr.length) {
            ret[rdx][cdx] = arr.pop();
            rdx++;
            cdx++;
        }
    }
    let stPts = [];
    for (let r = rows - 1; r > 0; r--) {
        stPts.push({ r: r, c: 0 });
    }
    for (let c = 0; c < cols; c++) {
        stPts.push({ r: 0, c: c });
    }
    stPts.forEach(function (pt) {
        let arr = getArr(pt.r, pt.c);
        arr.sort(function (a, b) { return b - a; });
        setArr(pt.r, pt.c, arr);
    });
    return ret;
};